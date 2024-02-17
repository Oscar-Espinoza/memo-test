import React from 'react';
import { MemoTest } from '@/app/_types/Memos';

function SimplifiedMemoCard({ memo }: { memo: MemoTest }) {
  const cardsLength = memo.images.length;

  return (
    <div className='px-10 py-5 bg-white text-black flex flex-col gap-2 text-center max-w-fit'>
      <h2>{memo.name}</h2>
      <p>{`${cardsLength} x ${cardsLength}`}</p>
      {memo.highestScore ? <p>Highest score: {memo.highestScore}</p> : null}
      <button type='button' className='bg-gray-500 rounded py-1 text-white'>Start</button>
    </div>
  );
}

export default SimplifiedMemoCard;
