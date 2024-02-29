'use client'

import Link from "next/link";
import MemoCard from "./_components/MemoCard";
import { MemoTest } from "./_types/Memos";
import { useQuery } from '@apollo/client';
import CoolBackground from "./_components/CoolBackground";
import { MouseEvent, useRef } from "react";
import { motion } from "framer-motion";
import { GET_MEMO_TESTS } from "./_graphql/memoTests/queries";

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


export default function Home() {
  const { loading, error, data } = useQuery(GET_MEMO_TESTS, {
    fetchPolicy: 'cache-and-network'
  });

  const parentRef = useRef<HTMLElement>(null);

  console.log(loading)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const lastGame = localStorage.getItem('gameState')
  const lastGameId = lastGame ? JSON.parse(lastGame).id : null

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!parentRef.current) return;

    const xPercent = e.clientX / document.documentElement.clientWidth * 100;
    parentRef.current.style.setProperty('--mouse-x-percent', `${xPercent}%`);
  };


  return (
    <main className="relative w-full" onMouseMove={handleMouseMove} ref={parentRef}>
      <CoolBackground />
      
      <motion.ul
        className="flex min-h-screen p-24 gap-10 items-center justify-center flex-wrap relative w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.memoTests.map((memo: MemoTest) => (
          <motion.li key={memo.name} variants={item}>
            <MemoCard  memo={memo} />
          </motion.li>
        ))}
      {lastGame && <Link href={`/game-session/${lastGameId}`} className="px-5 py-3 bg-blue-300 text-black max-w-fit rounded-lg relative">Continue last game</Link>}
      </motion.ul>
    </main>
  );
}
