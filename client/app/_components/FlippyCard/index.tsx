'use client'

import { Card } from '@/app/_types/Memos'
import Image from 'next/image'
import React from 'react'

const cardVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function FlippyCard({ card, index, handleCardClick }: { card: Card, index: number, handleCardClick: (cardIndex: number) => void }) {
  const { imageUrl, isFlipped } = card

  return (
    <div
      className='flex justify-center items-center flex-grow relative min-h-80 ' onClick={() => handleCardClick(index)}
    >
      <div className={`cardContainer absolute w-full h-full ease-in duration-200 ${isFlipped && 'showBack'}`}>
        <div className='cardFront cursor-pointer absolute w-full h-full bg-yellow-300 flex items-center justify-center font-extrabold text-2xl text-purple-500 rounded-xl'>{index}</div>

        <div className='cardBack absolute w-full h-full'>
          <Image src={imageUrl} fill alt='card/image' className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default FlippyCard