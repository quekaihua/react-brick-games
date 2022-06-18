import React from 'react'
import style from './index.module.less'
import Button from './button'

const Keyboard = () => {
  return (
    <div
      className={style.keyboard}
      style={{
        marginTop: 20,
      }}
    >
      <Button
        color="blue"
        size="s1"
        top={0}
        left={98}
        label="QUICK"
        arrow="translate(0, 63px)"
        position
        type="up"
      />
      <Button
        color="blue"
        size="s1"
        top={180}
        left={98}
        label="DOWN"
        arrow="translate(0,-71px) rotate(180deg)"
        type="down"
      />
      <Button
        color="blue"
        size="s1"
        top={90}
        left={6}
        label="LEFT"
        arrow="translate(60px, -12px) rotate(270deg)"
        type="left"
      />
      <Button
        color="blue"
        size="s1"
        top={90}
        left={188}
        label="RIGHT"
        arrow="translate(-60px, -12px) rotate(90deg)"
        type="right"
      />
      <Button
        color="blue"
        size="s0"
        top={100}
        left={380}
        label="ROTATE DIRECTION"
        type="rotate"
      />
      <Button
        color="red"
        size="s2"
        top={0}
        left={540}
        label="RESET(R)"
        type="r"
      />
      <Button
        color="green"
        size="s2"
        top={0}
        left={450}
        label="SOUND(S)"
        type="s"
      />
      <Button
        color="green"
        size="s2"
        top={0}
        left={360}
        label="START(P)"
        type="p"
      />
    </div>
  )
}

export default Keyboard
