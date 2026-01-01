import React, { FC, memo, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongsMenusItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={itemData.picUrl ? getImageSize(itemData.picUrl, 140) : getImageSize(itemData.coverImgUrl, 140)} alt="" />
        <div className="cover">
          <div className="info">
            <span>
              <i className="icon-headest"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <a className="icon-play" href="#"></a>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongsMenusItem)
