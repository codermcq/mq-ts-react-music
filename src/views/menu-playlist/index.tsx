import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import { MenuPlaylistWrapper, PlaylistLeftWrapper, PlaylistRightWrapper } from './style'
import NavBar from '../discover/c-cpns/nav-bar'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { getPlayTrackAll } from '@/components/songs-menus-item/service'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const MenuPlaylist: FC<IProps> = (props) => {
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  const id = Number(query.id)

  const { hotRecommend, songsList } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
      songsList: state.songs.songsList
    }),
    shallowEqual
  )

  // const [currentMenuSongs, setCurrentMenuSongs] = useState([])
  const [currentPlaylist, setCurrentPlaylist] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    getPlayTrackAll(id).then((res: any) => {
      const result = res.songs.slice(0, 20)
      setCurrentPlaylist(result)
    })
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currentMenuSongs = hotRecommend.filter((item: any) => item.id === id)

  return (
    <MenuPlaylistWrapper>
      <NavBar />
      <div className="menu-playlist">
        <PlaylistLeftWrapper>
          <div className='left-header'>
            <div className='img-cover'>
              <img src="" alt="" />
            </div>
          </div>
        </PlaylistLeftWrapper>
        <PlaylistRightWrapper>
          right
        </PlaylistRightWrapper>
      </div>
    </MenuPlaylistWrapper>
  )
}

export default memo(MenuPlaylist)
