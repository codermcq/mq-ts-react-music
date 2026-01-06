import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import { MenuPlaylistWrapper, PlaylistLeftWrapper, PlaylistRightWrapper } from './style'
import NavBar from '../discover/c-cpns/nav-bar'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { getPlayTrackAll } from '@/components/songs-menus-item/service'
import { shallowEqual } from 'react-redux'
import { fetchPlaylistData } from './store'
import { formatTime, formatDate } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const MenuPlaylist: FC<IProps> = (props) => {
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  const id = Number(query.id)

  const { currentPlaylist } = useAppSelector(
    (state) => ({
      currentPlaylist: state.playlist.currentPlaylist
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPlaylistData(id))
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(currentPlaylist)

  return (
    <MenuPlaylistWrapper>
      <NavBar />
      <div className="menu-playlist">
        <PlaylistLeftWrapper>
          <div className="left-header">
            <div className="img-cover">
              <img className="header-img" src={currentPlaylist?.coverImgUrl} alt="" />
              <span className="mask"></span>
            </div>
            <div className="info">
              <div className="info-name">
                <i className="song-icon"></i>
                <span className="name">{currentPlaylist.name}</span>
              </div>
              <div className="creator">
                <img className="creator-img" src={currentPlaylist.creator.avatarUrl} alt="" />
                <span className="creator-name">{currentPlaylist.creator.nickname}</span>
                <img
                  className="creator-level"
                  src={currentPlaylist.creator.avatarDetail.identityIconUrl}
                  alt=""
                />
                <span className="creator-date">{formatDate(currentPlaylist.createTime)} 创建</span>
              </div>
              <div className="tags">
                <span className="tags-label">标签:</span>
                {currentPlaylist.tags.map((tag: any) => {
                  return <span className='tag' key={tag}>{tag}</span>
                })}
              </div>
              <div className='desc'>
                {currentPlaylist.description}
              </div>
            </div>
          </div>
        </PlaylistLeftWrapper>
        <PlaylistRightWrapper>right</PlaylistRightWrapper>
      </div>
    </MenuPlaylistWrapper>
  )
}

export default memo(MenuPlaylist)
