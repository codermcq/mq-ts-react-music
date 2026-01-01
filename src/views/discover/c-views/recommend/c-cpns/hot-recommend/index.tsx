import React, { FC, memo, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { useAppSelector } from '@/store'
import SongsMenusItem from '@/components/songs-menus-item'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
  const { HotRecommend } = useAppSelector((state) => ({
    HotRecommend: state.recommend.hotRecommend
  }), shallowEqual)

  return (
    <HotRecommendWrapper>
      <SectionHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend">
        {HotRecommend.map((item) => {
          return <SongsMenusItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
