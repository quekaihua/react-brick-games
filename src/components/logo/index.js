import React from 'react'
import style from './index.module.less'
import cn from 'classnames'

const Logo = () => {
  return (<div className={style.logo} >
    <div className={cn({ bg: true, [style.dragon]: true })} />
  </div>)
}

export default Logo
