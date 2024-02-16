'use client'

import FlippyCard from '@/app/_components/FlippyCard'
import { Card, MemoTest } from '@/app/_types/Memos'
import React, { useEffect, useState } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

const GET_GAME_SESSION = gql`
  query GetGameSession($id: ID!) {
    gameSession(id: $id) {
      id
      memoTest {
        id
        images
      }
      numberOfPairs
      retries
      score
      state
    }
  }
`;

const UPDATE_GAME_SESSION = gql`
  mutation UpdateGameSession($id: ID!, $retries: Int!, $state: State) {
    updateGameSession(id: $id, retries: $retries, state: $state) {
      score
    }
  }
`;

function GameSessionPage({ params }: { params: { id: string } }) {
  const { id } = params
  const [updateGameSession] = useMutation(UPDATE_GAME_SESSION);
  const router = useRouter()

  const [skipQuery, setSkipQuery] = useState(false);

  useEffect(() => {
    const gameState = localStorage.getItem('gameState');
    if (gameState) {
      setSkipQuery(true);
      setCards(JSON.parse(gameState).cards)
    } else {
      setSkipQuery(false);
    }
  }, []);

  const { loading, error, data } = useQuery(GET_GAME_SESSION, {
    variables: { id },
    skip: !id || skipQuery,
  });

  const savedGame = localStorage.getItem('gameState');
  const parsedSavedGame = savedGame ? JSON.parse(savedGame) : null

  const [cards, setCards] = useState<Card[]>(savedGame ? parsedSavedGame.cards : [])
  const [retries, setRetries] = useState<number>(savedGame ? parsedSavedGame.retries : 0)
  const [firstCard, setFirstCard] = useState<Card | null>(null)
  const [secondCard, setSecondCard] = useState<Card | null>(null)
  const [isFlippingDisabled, setIsFlippingDisabled] = useState(false);
  const [score, setScore] = useState<number>(savedGame ? parsedSavedGame.score : 0)

  const handleCardClick = (cardIndex: number) => {
    if (isFlippingDisabled) return;
    if (!cards[cardIndex].isFlipped) {
      setCards(prevCards => {
        const newCards = prevCards
        newCards[cardIndex].isFlipped = true
        return newCards
      })
      firstCard ? setSecondCard(cards[cardIndex]) : setFirstCard(cards[cardIndex])
    }
  }

  useEffect(() => {
    if (data && data.gameSession) {
      if (!savedGame){
        const initialCards = [...data.gameSession.memoTest.images, ...data.gameSession.memoTest.images].sort(() => Math.random() - 0.5).map((imageUrl: string, index: number) => ({
          id: index,
          imageUrl,
          isFlipped: false
        }))
        setCards(initialCards)
      }

    }
  }, [data])


  useEffect(() => {

    const resetTurn = () => {
      setFirstCard(null)
      setSecondCard(null)
      setRetries((prev: number) => prev + 1)
    }

    if (firstCard && secondCard) {
      setIsFlippingDisabled(true);
      setTimeout(() => {
        if (firstCard.imageUrl !== secondCard.imageUrl) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            });
          });
        } else {
          setScore(prevScore => prevScore + 1)
        }
        setIsFlippingDisabled(false)
        resetTurn();
      }, 1000);

    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (score > 0 && cards.length / 2 === score) {
      updateGameSession({
        variables: {
          id: id,
          retries: retries,
          state: 'Completed'
        }
      }).then(response => {
        localStorage.removeItem('gameState')
        router.push(`/score?score=${response.data.updateGameSession.score}`);
      }).catch(error => {
        console.error('Error updating game session:', error);
      });
    }
  }, [score, cards.length, router, cards, updateGameSession]);

  useEffect(() => {
    console.log('RETRIES', retries)
    if (cards.length !== 0) {
      localStorage.setItem('gameState', JSON.stringify({ cards, score, id, retries }));
    }
  }, [score, retries])


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='min-h-screen p-24 flex flex-col'>
      <div className='border border-white flex-grow min-h-full grid grid-cols-4 relative'>
        {cards.map((card: Card, index) => (
          <FlippyCard key={card.id} card={card} index={index} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default GameSessionPage