import React, { useState } from 'react'
import cn from 'classnames'
import style from './index.module.less'
import { transform } from '../../../utils/const'
import { useDispatch, useSelector } from 'react-redux'
import control from '../../../control'

const Button = ({ color, size, top, left, label, position, arrow, type }) => {
  const [active, setActive] = useState(false)

  const { pause, game, games, music } = useSelector((state) => ({
    pause: state.pause,
    game: state.game,
    games: state.games,
    music: state.music,
  }))
  const dispatch = useDispatch()

  const handleMonseDown = ({ type, pause, game, games, music }) => {
    console.log(type, 'down', pause, game, music)
    setActive(true)
    if (pause === 0) {
      control['todo'][type]({ dispatch, pause, game, games, music })
    } else {
      control[game.name][type]({ dispatch, pause, game, games, music })
    }
  }

  const handleMonseUp = ({ type, pause, game, games }) => {
    console.log(type, 'up', pause, game, games)
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
      onMouseDown={() => handleMonseDown({ type, pause, game, games, music })}
      onMouseUp={() => handleMonseUp({ type, pause, game, games, music })}
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
