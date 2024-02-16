'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ScorePage() {
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  console.log(score)
  return (
    <section className='min-h-screen flex flex-col gap-10 justify-center items-center relative'>
      <Link href='/' className='bg-white px-5 py-2 text-center rounded-lg cursor-pointer'>{'<--'} Home</Link>
      <div className='bg-white p-12'>
        <h2>Your score is: {score}</h2>
      </div>
    </section>
  )
}

export default ScorePage