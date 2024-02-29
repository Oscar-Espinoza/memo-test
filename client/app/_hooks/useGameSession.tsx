import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { GET_GAME_SESSION } from '../_graphql/gameSessions/queries';
import { UPDATE_GAME_SESSION } from '../_graphql/gameSessions/mutations';
import { useRouter } from 'next/navigation';
import { Card } from '../_types/Memos';

export function useGameSession(sessionId: string) {
  const [cards, setCards] = useState<Card[]>([])
  const [retries, setRetries] = useState<number>(0)
  const [firstCard, setFirstCard] = useState<Card | null>(null)
  const [secondCard, setSecondCard] = useState<Card | null>(null)
  const [isFlippingDisabled, setIsFlippingDisabled] = useState(false);
  const [score, setScore] = useState<number>(0)
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_GAME_SESSION, {
    variables: { id: sessionId },
    skip: !sessionId,
  });

  const [updateGameSession] = useMutation(UPDATE_GAME_SESSION);

  useEffect(() => {
    if (!loading && data && data.gameSession) {
      const initialCards = [...data.gameSession.memoTest.images, ...data.gameSession.memoTest.images]
        .sort(() => Math.random() - 0.5)
        .map((imageUrl, index) => ({ id: index, imageUrl, isFlipped: false }));

      setCards(initialCards);
    }
  }, [loading, data]);

  useEffect(() => {
    if (firstCard && secondCard) {
      setIsFlippingDisabled(true);
      const isMatch = firstCard.imageUrl === secondCard.imageUrl;
      setTimeout(() => {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return isMatch ? card : { ...card, isFlipped: false };
            }
            return card;
          })
        );
        if (isMatch) setScore(prev => prev + 1);
        setRetries((prev) => prev + 1) 
        setIsFlippingDisabled(false);
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (score === cards.length / 2 && cards.length > 0) {
      updateGameSession({
        variables: { id: sessionId, retries, state: 'Completed' },
      }).then((response) => {
        router.push(`/score?score=${response.data.updateGameSession.score}`);
      });
    }
  }, [score, cards.length, sessionId, retries, router, updateGameSession]);

  const handleCardClick = (cardIndex: number) => {
    if (isFlippingDisabled || cards[cardIndex].isFlipped) return;
    setCards(prevCards =>
      prevCards.map((card, index) =>
        index === cardIndex ? { ...card, isFlipped: true } : card
      )
    );
    const selectedCard = cards[cardIndex];
    firstCard ? setSecondCard(selectedCard) : setFirstCard(selectedCard);
  };

  return { cards, handleCardClick, loading, error};
}
