import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = ((props) => {
  return (
    <div>Download</div>
  )
})

export default memo(Download)


