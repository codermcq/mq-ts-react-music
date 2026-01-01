import React, { FC, memo, ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { getImageSize } from '@/utils/format'
import { useDispatch } from 'react-redux'
import { fetchCurrentSongAction } from '@/views/player/store'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props

  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <RankingItemWrapper>
      <div className="top">
        <div className="cover">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="#" className="mask"></a>
        </div>
        <div className="info">
          <Link to={'/discover'}>
            <h3 className='title'>{itemData.name}</h3>
          </Link>
          <div className="btn">
            <a href="#" className="icon icon-play">
              播放
            </a>
            <a href="#" className="icon icon-favor">
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className='list'>
        {
          itemData?.tracks?.slice(0, 10).map((item: any, index: any) => {
            return (
              <div className='item' key={item.id}>
                <div className='index'>{index+1}</div>
                <div className='info'>
                  <div className='name'>{item.name}</div>
                  <div className='operate'>
                    <i className='icon icon-play' onClick={() => handlePlayClick(item.id)}></i>
                    <i className='icon icon-add'></i>
                    <i className='icon icon-favor'></i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='more'>
        <a className='text'>查看全部&gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
