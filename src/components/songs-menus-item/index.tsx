import React, { FC, memo, ReactNode, useEffect } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { getPlayTrackAll } from './service'
import { changePlaySongListAction } from '@/views/player/store'
import { Navigate, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongsMenusItem: FC<IProps> = (props) => {
  const { itemData } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {}, [dispatch])

  // 处理每个menuitem的点击, 然后将拿到数据放到播放列表中
  function handleMenuItemClick(id: number) {
    getPlayTrackAll(id).then((res: any) => {
      const songList = res.songs.slice(0, 20)
      dispatch(changePlaySongListAction(songList))
    })
  }

  // 处理每个menuitem的点击跳转到playlist
  function handleMenuClick(id: number) {
    navigate(`/playlist?id=${id}`)
  }

  return (
    <MenuItemWrapper>
      <div className="top">
        <img
          src={
            itemData.picUrl
              ? getImageSize(itemData.picUrl, 140)
              : getImageSize(itemData.coverImgUrl, 140)
          }
          alt={itemData.name}
        />
        <div className="cover">
          <div className="info">
            <span>
              <i className="icon-headest"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <a className="icon-play" onClick={() => handleMenuItemClick(itemData.id)}></a>
          </div>
        </div>
        <a onClick={() => handleMenuClick(itemData.id)} className='mask'></a>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongsMenusItem)
