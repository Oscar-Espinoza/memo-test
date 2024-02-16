import React from 'react'
import { MemoTest } from '@/app/_types/Memos'
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation'

const CREATE_GAME_SESSION = gql`
  mutation CreateGameSession(
    $memoTestId: ID!,
    $numberOfPairs: Int!,
    $retries: Int!,
    $score: Int!,
    $state: State
  ) {
    createGameSession(
      memo_test_id: $memoTestId,
      numberOfPairs: $numberOfPairs,
      retries: $retries,
      score: $score,
      state: $state
    ) {
      id
    }
  }
`;

function MemoCard({ memo }: { memo: MemoTest }) {
  const cardsLength = memo.images.length
  const router = useRouter();
  const [createGameSession, { data, loading, error }] = useMutation(CREATE_GAME_SESSION);

  const handleStartClick = async () => {
    try {
      const { data } = await createGameSession({
        variables: {
          memoTestId: memo.id,
          numberOfPairs: cardsLength,
          score: 0,
          retries: 0,
          state: 'Started',
        },
      });

      if (data.createGameSession.id) {
        localStorage.removeItem('gameState');
        router.push(`/game-session/${data.createGameSession.id}`);
      }
    } catch (error) {
      console.error('Error creating game session:', error);
    }
  };

  return (
    <div className='px-10 py-5 bg-white text-black flex flex-col gap-2 text-center'>
      <h2>{memo.name}</h2>
      <p>{`${cardsLength} x ${cardsLength}`}</p>
      {memo.highestScore ? <p>Highest score: {memo.highestScore}</p> : null}      
      <button type='button' className='bg-gray-500 rounded py-1 text-white' onClick={handleStartClick}>Start</button>
    </div>
  )
}

export default MemoCard