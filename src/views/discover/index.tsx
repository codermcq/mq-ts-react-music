import React, { FC, memo, ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <NavBar/>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
