import React from 'react'
import AnimatedTitle from '../AnimatedTitle';

function Background({title, color, zIndex, bgColor,  isMainBg}: {title: string, color: string, zIndex: number, bgColor: string, isMainBg?: boolean}) {

  return (
    <div className={`absolute ${bgColor + ' z-' + zIndex} ${color}`} style={{width: isMainBg ? 'var(--mouse-x-percent, 100%)' : ''}}>
      <div className='relative h-screen w-full overflow-hidden'>
        <div className='bubbles'>
          {Array.from(Array(12).keys()).map(n => {
            const random = Math.floor(Math.random() * (28 - 2 + 1)) + 2;
            const style = { '--i': random } as React.CSSProperties;
            return <span key={n} style={style}></span>
          })}
        </div>
        <AnimatedTitle word={title} />
      </div>
    </div>
  );
}

export default Background