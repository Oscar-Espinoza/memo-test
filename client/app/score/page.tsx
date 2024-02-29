'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {motion} from 'framer-motion'

function ScorePage() {
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  return (
    <section className='min-h-screen flex flex-col gap-10 justify-center items-center relative overflow-hidden bg-sky-950'>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <Link href='/' className=' px-5 py-2 text-center rounded-lg cursor-pointer flex justify-center items-center gap-3 bg-white'>
        <svg className="w-3.5 h-3.5 ms-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg> Home
      </Link>
      <motion.div 
        className='block max-w-sm p-6 border border-gray-200 rounded-lg shadow'
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <h2 className='text-white'>Your score is {score}!</h2>
      </motion.div>
    </section>
  )
}

export default ScorePage