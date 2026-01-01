import React, { FC, memo, ReactNode } from 'react'
import { NavBarWrapper } from './style'
import { discoverMenu } from '../../../../assets/data/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = (props) => {
  return (
    <NavBarWrapper>
      <div className="nav">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              {<NavLink to={item.link}>{item.title}</NavLink>}
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
