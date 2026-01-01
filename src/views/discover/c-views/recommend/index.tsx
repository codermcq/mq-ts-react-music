import React, { FC, memo, ReactNode, useEffect } from 'react'
import { RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import { fetchRecommendData } from './store'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import HotAnchor from './c-cpns/hot-anchor'
import SettleSinger from './c-cpns/settle-singer'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendData())
  }, [dispatch])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content">
        <RecommendLeft className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight className="right">
          <UserLogin />
          <SettleSinger/>
          <HotAnchor />
        </RecommendRight>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
