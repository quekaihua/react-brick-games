import React from 'react'
import classnames from 'classnames'

import style from './index.module.less'
import { blankMatrix } from '../../utils/const'

const Matrix = ({ matrix }) => {
  const data = matrix || blankMatrix

  return (
    <div className={style.matrix}>{
      data.map((p, k1) => (<p key={k1}>
        {
          p.map((e, k2) => <b
            className={classnames({
              c: e === 1,
              d: e === 2,
            })}
            key={k2}
          />)
        }
      </p>))
    }
    </div>
  )
}

export default Matrix