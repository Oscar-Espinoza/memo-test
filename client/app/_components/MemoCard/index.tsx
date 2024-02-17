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
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 text-center'>

      <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{memo.name}</h2>

      <p className='font-normal text-gray-400'>{`${cardsLength} x ${cardsLength}`}</p>

      {memo.highestScore ? <p className='font-normal text-gray-400'>Highest score: {memo.highestScore}</p> : null}

      <button type='button' className='px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleStartClick}>Start</button>
    </div>
  )
}

export default MemoCard