'use client'

import Link from "next/link";
import MemoCard from "./_components/MemoCard";
import { MemoTest } from "./_types/Memos";
import { useQuery, gql } from '@apollo/client';

const GET_MEMO_TESTS = gql`
  query GetMemoTests {
    memoTests {
      id
      name
      images
      highestScore
    }
  }
`;


export default function Home() {
  const { loading, error, data } = useQuery(GET_MEMO_TESTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const lastGame = localStorage.getItem('gameState')
  const lastGameId = lastGame ? JSON.parse(lastGame).id : null

  return (
    <main className="flex flex-col min-h-screen p-24 gap-10 items-center justify-center flex-wrap">
      <div className="flex w-full justify-evenly">
        {data.memoTests.map((memo: MemoTest) => (
          <MemoCard key={memo.name} memo={memo} />
        ))}
      </div>
      {lastGame && <Link href={`/game-session/${lastGameId}`} className="px-5 py-3 bg-blue-300 text-black max-w-fit rounded-lg">Continue last game</Link>}
    </main>
  );
}
