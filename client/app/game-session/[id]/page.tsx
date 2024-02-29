'use client'

import GameSessionTable from '@/app/_components/GameSessionTable';
import Image from 'next/image';
import { useGameSession } from '@/app/_hooks/useGameSession';

function GameSessionPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { cards, handleCardClick, loading, error } = useGameSession(id)


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='min-h-screen p-24 flex flex-col relative'>
      <Image fill alt='game-session-bg-image' src={'/game_session_bg.webp'} className=' -z-10' />
      <GameSessionTable cards={cards} handleCardClick={handleCardClick} />
    </div>
  )
}

export default GameSessionPage