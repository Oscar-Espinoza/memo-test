import React from 'react'
import { motion } from "framer-motion";
import { Card } from '@/app/_types/Memos';
import FlippyCard from '../FlippyCard';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const cardVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function GameSessionTable({cards, handleCardClick}: {cards: Card[], handleCardClick: (cardIndex: number) => void}) {
  return (
      <motion.ul
          className="relative w-full flex-grow grid grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          animate={cards.length > 0 ? 'visible' : 'hidden'}
        >
          {cards.map((card: Card, index) => (
            <motion.li key={card.id} variants={cardVariant}
            >
              <FlippyCard card={card} index={index} handleCardClick={handleCardClick} />
            </motion.li>
          ))}
        </motion.ul>
  )
}

export default GameSessionTable