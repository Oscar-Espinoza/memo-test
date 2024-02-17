'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ScorePage() {
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  return (
    <section className='min-h-screen flex flex-col gap-10 justify-center items-center relative'>
      <Link href='/' className='bg-white px-5 py-2 text-center rounded-lg cursor-pointer flex justify-center items-center gap-3'>
        <svg className="w-3.5 h-3.5 ms-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg> Home
      </Link>
      <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h2 className='text-white'>Your score is {score}!</h2>
      </div>
    </section>
  )
}

export default ScorePage