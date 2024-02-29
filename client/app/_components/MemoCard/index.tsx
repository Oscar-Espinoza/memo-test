import React from 'react'
import { MemoTest } from '@/app/_types/Memos'
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { CREATE_GAME_SESSION } from '@/app/_graphql/gameSessions/mutations';
import NextImage from "next/image";

function MemoCard({ memo }: { memo: MemoTest }) {
  const cardsLength = memo.images.length
  const router = useRouter();
  const [createGameSession, { data, loading, error }] = useMutation(CREATE_GAME_SESSION);

  const handleStartClick = async () => {
    try {
      const { data } = await createGameSession({
        variables: {
          memoTestId: memo.id,
          numberOfPairs: cardsLength,
          score: 0,
          retries: 0,
          state: 'Started',
        },
      });

      if (data.createGameSession.id) {
        localStorage.removeItem('gameState');
        router.push(`/game-session/${data.createGameSession.id}`);
      }
    } catch (error) {
      console.error('Error creating game session:', error);
    }
  };

  return (
    <Card  shadow="sm" className='rounded-xl overflow-hidden border border-slate-700' isPressable onPress={handleStartClick}>
          <CardBody className="overflow-hidden rounded-top-xl p-0 w-60 h-60 bg-purple-950 ">
            <Image
              as={NextImage}
              width={240}
              height={240}
              alt='Memo image'
              className='transform hover:scale-110 transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover'
              src={memo.images[0]}
            />
          </CardBody>
          <CardFooter className="bg-yellow-400 text-purple-950 text-small justify-between p-2 flex flex-col">
            <b>{memo.name}</b>
            <p className="">Highest score: {memo.highestScore}</p>
          </CardFooter>
        </Card>
  )
}

export default MemoCard