import React from 'react'
import Matrix from '../matrix'
import games from '../../utils/games'

const Tetris = () => {
  const matrix = games.tetris
  return (
    <Matrix matrix={matrix}/>
  )
}

export default Tetris