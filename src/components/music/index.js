import React from 'react'
import cn from 'classnames'
import style from './index.module.less'

const Music = ({ music }) => {
  return (
    <div className={cn({
      bg: true,
      [style.music]: true,
      [style.c]: !music
    })}></div>
  )
}

export default Music