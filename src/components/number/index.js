import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import style from './index.module.less'

const formate = (num) => (num < 10 ? `0${num}`.split('') : `${num}`.split(''))

const Number = ({ number, length, time }) => {
  const renderNumber = (num) => (
    <div className={style.number}>
      {num.map((e, k) => (
        <span className={cn(['bg', style[`s_${e}`]])} key={k} />
      ))}
    </div>
  )

  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  if (time) {
    const hour = formate(now.getHours())
    const min = formate(now.getMinutes())
    const sec = now.getSeconds() % 2
    const t = hour.concat(sec ? 'd' : 'd_c', min)
    return renderNumber(t)
  }
  const num = `${number}`.split('')
  for (let i = 0, len = length - num.length; i < len; i++) {
    num.unshift('n')
  }
  return renderNumber(num)
}

export default Number
