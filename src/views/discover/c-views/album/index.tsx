import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = ((props) => {
  return (
    <div>Album</div>
  )
})

export default memo(Album)

