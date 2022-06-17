import style from './index.less'
import React from 'react'
import Decorate from '../components/decorate'
import classnames from 'classnames'

const App = () => {

  console.log(style)
  return (
    <div className={style.app}>
      <div className={style.rect}>
        <Decorate/>
      </div>
    </div>
  )
}

export default App