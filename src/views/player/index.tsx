import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = ((props) => {
  return (
    <div>Player</div>
  )
})

export default memo(Player)

