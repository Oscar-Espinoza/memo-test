'use client'

import { Card } from '@/app/_types/Memos'
import Image from 'next/image'
import React, { useState } from 'react'

function FlippyCard({ card, index, handleCardClick }: { card: Card, index: number, handleCardClick: (cardIndex: number) => void }) {
  const { imageUrl, isFlipped } = card

  return (
    <div className='flex justify-center items-center border flex-grow border-l-indigo-300 relative min-h-80' onClick={() => handleCardClick(index)}>
      <div className={`cardContainer absolute w-full h-full ease-in duration-200 ${isFlipped && 'showBack'}`}>
        <div className='cardFront cursor-pointer absolute w-full h-full bg-slate-400 flex items-center justify-center font-extrabold text-2xl'>{index}</div>

        <div className='cardBack absolute w-full h-full bg-white text-black'>
          <Image src={imageUrl} fill alt='card/image' />
        </div>
      </div>
    </div>
  )
}

export default FlippyCard