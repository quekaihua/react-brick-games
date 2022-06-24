import React, { useState } from 'react'
import cn from 'classnames'
import style from './index.module.less'
import { transform } from '../../../utils/const'
import control from '../../../control'
import { useSelector } from 'react-redux'
import { isMobile } from '../../../utils/helps'

const Button = ({ color, size, top, left, label, position, arrow, type }) => {
  const [active, setActive] = useState(false)
  const { pause, game } = useSelector((state) => ({
    pause: state.pause,
    game: state.game,
  }))
  const handleDown = () => {
    setActive(true)
    console.log(pause, game)
    if (pause === 0) {
      control['todo'][type]()
    } else {
      control[game.name][type]()
    }
  }

  const handleUp = () => {
    setActive(false)
    control.clearLoop(type)
  }

  let rendered = null
  if(isMobile()) {
    rendered = (
      <div
        className={cn({
          [style.button]: true,
          [style[color]]: true,
          [style[size]]: true,
        })}
        style={{ top, left }}
        onTouchStart={handleDown}
        onTouchEnd={handleUp}
      >
        <i className={cn({ [style.active]: active })}/>
        {size === 's1' && (
          <em
            style={{
              [transform]: `${arrow} scale(1,2)`,
            }}
          />
        )}
      </div>
    )
  } else {
    rendered = (
      <div
        className={cn({
          [style.button]: true,
          [style[color]]: true,
          [style[size]]: true,
        })}
        style={{ top, left }}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
      >
        <i className={cn({ [style.active]: active })}/>
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

  return rendered
}

export default Button
