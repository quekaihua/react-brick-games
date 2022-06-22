import React, { useState } from 'react'
import cn from 'classnames'
import style from './index.module.less'
import { transform } from '../../../utils/const'
import control from '../../../control'
import { useSelector } from 'react-redux'

const Button = ({ color, size, top, left, label, position, arrow, type }) => {
  const [active, setActive] = useState(false)

  const { pause, game } = useSelector((state) => ({
    pause: state.pause,
    game: state.game,
  }))

  const handleMonseDown = ({ type, pause, game }) => {
    console.log(type, 'down')
    setActive(true)
    if (pause === 0) {
      control['todo'][type]()
    } else {
      control[game.name][type]()
    }
  }

  const handleMonseUp = () => {
    setActive(false)
  }

  return (
    <div
      className={cn({
        [style.button]: true,
        [style[color]]: true,
        [style[size]]: true,
      })}
      style={{ top, left }}
      onMouseDown={() => handleMonseDown({ type, pause, game })}
      onMouseUp={handleMonseUp}
    >
      <i
        className={cn({ [style.active]: active })}
        // ref={(c) => { this.dom = c }}
      />
      {size === 's1' && (
        <em
          style={{
            [transform]: `${arrow} scale(1,2)`,
          }}
        />
      )}
      <span className={cn({ [style.position]: position })}>{label}</span>
    </div>
  )
}

export default Button
