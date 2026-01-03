import React, { FC, memo, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { useAppSelector } from '@/store'
import randking from '../../../ranking'
import { shallowEqual } from 'react-redux'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = (props) => {
  const { randkings = [] } = useAppSelector(
    (state) => ({
      randkings: state.recommend.rankings
    }),
    shallowEqual
  )

  return (
    <TopRankingWrapper>
      <SectionHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {randkings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
