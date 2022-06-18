import React from 'react'
import Matrix from '../matrix'
import games from '../../utils/games'

const Snake = () => {
  const matrix = games.snake
  return (
    <Matrix matrix={matrix}/>
  )
}

export default Snake