import React from 'react'
import style from './index.module.less'
import Decorate from '../components/decorate'
import Keyboard from '../components/keybord'
import Number from '../components/number'
import Music from '../components/music'
import Pause from '../components/pause'
import Welcome from '../components/welcome'
import { useSelector } from 'react-redux'
import TetrisPanel from '../components/tetris-pannel'
import Snake from '../components/snake'

const App = () => {
  const state = useSelector((state) => state)
  const { levels, speed, music, pause, game } = state

  return (
    <div className={style.app}>
      <div className={style.rect}>
        <Decorate />
        <div className={style.screen}>
          <div className={style.panel}>
            {game.name === 'tetris' && <TetrisPanel />}
            {game.name === 'snake' && <Snake />}
            {pause === 0 && <Welcome game="TERIS" />}
            <div className={style.state}>
              {
                pause === 0
                  ?
                  <>
                    <p>HI-SCORE</p>
                    <Number number={game.highest} length={6} />
                  </>
                  :
                  <>
                    <p>SCORE</p>
                    <Number number={game.score} length={6} />
                  </>
              }
              <p>levels</p>
              <Number number={levels} length={6} />
              <p>speed</p>
              <Number number={speed} length={1} />
              <div className={style.bottom}>
                <Music music={music} />
                <Pause pause={pause} />
                <Number time={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Keyboard />
    </div>
  )
}

export default App
