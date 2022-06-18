import React from 'react'
import style from './index.module.less'

const Welcome = ({ game }) => {
  return (
    <div className={style.welcome}>
      <h3>WELCOME</h3>
      <div>
        <p>点方向键选关卡</p>
        <p>点START开始</p>
      </div>
      <div>
        <span>{game}</span>
      </div>
    </div>
  )
}

export default Welcome