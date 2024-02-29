import React from 'react'
import Background from './Background'

function CoolBackground() {
  return (
    <>
      <Background title='Memotest' color='text-yellow-400' zIndex={0} bgColor='bg-yellow-400'></Background>
      <Background title='Have fun!' color='text-purple-800' zIndex={10} bgColor='bg-purple-950' isMainBg={true}></Background>
    </>
  )
}

export default CoolBackground