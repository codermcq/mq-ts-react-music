import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = (props) => {
  return (
    <div>
      <h1>您输入的路径有误! 请联系codermcq: 3304812242@qq.com</h1>
    </div>
  )
}

export default memo(NotFound)
