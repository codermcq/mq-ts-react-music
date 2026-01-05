import React, { FC, memo, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { getPlayTrackAll } from '../songs-menus-item/service'

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = ((props) => {
  const { itemData } = props

  function handleAlbumItemClick(id: number) {
    console.log(itemData)
    getPlayTrackAll(id).then(res => {
      console.log(res)
    })
  }

  return (
    <AlbumItemWrapper>
      <div className='cover'>
        <img src={getImageSize(itemData.blurPicUrl, 100)} alt="" />
        <a href="#" className='mask'></a>
        <a className='icon-play' onClick={() => handleAlbumItemClick(itemData.id)}></a>
      </div>
      <div className='info'>
        <div className='name'>{itemData.name}</div>
        <div className='artist'>{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
})

export default memo(NewAlbumItem)

