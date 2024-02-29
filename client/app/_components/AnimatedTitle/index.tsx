import React from 'react'

function AnimatedTitle({word}: {word: string}) {
  return (
    <div className={`wrapper bg-title`} >
      {word.split('').map((letter, i) => (
        <span key={i + letter}>{letter}</span>
      ))}
    </div>
  )
}

export default AnimatedTitle