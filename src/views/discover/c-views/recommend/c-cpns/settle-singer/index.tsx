import React, { FC, memo, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import Item from 'antd/es/list/Item'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
  const { settleSinger } = useAppSelector(
    (state) => ({
      settleSinger: state.recommend.settleSinger
    }),
    shallowEqual
  )

  return (
    <SettleSingerWrapper>
      <SectionHeaderV2 title="入住歌手" moreLink="#/discover/artist" />
      <div className="singer-list">
        {settleSinger.map((item) => {
          return (
            <a className='item' href="#/discover/artist" key={item.name}>
              <div className="head">
                <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              </div>
              <div className="info">
                <h4 className="name">{item.name}</h4>
                <p className="alias">{item.alias.join(' ')}</p>
              </div>
            </a>
          )
        })}
      </div>
      <div className='apply-for'>
        <a href="#" className='btn'>
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
