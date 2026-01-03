import React, { FC, memo, ReactNode } from 'react'
import { MenuPlaylistWrapper } from './style'
import NavBar from '../discover/c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const MenuPlaylist: FC<IProps> = (props) => {
  return (
    <MenuPlaylistWrapper>
      <NavBar />
      <div className='menu-playlist'>
        111
      </div>
    </MenuPlaylistWrapper>
  )
}

export default memo(MenuPlaylist)
