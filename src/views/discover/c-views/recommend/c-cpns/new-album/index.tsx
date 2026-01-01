import React, { ElementRef, FC, memo, ReactNode, useRef } from 'react'
import { AlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { shallowEqual, useSelector } from 'react-redux'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum
    }),
    shallowEqual
  )

  const bannersRef = useRef<CarouselRef>(null)

  function handleNextClick() {
    console.log('11')
    bannersRef?.current?.next()
  }

  function handlePrevClick() {
    bannersRef?.current?.prev()
  }

  return (
    <AlbumWrapper>
      <SectionHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="inner">
          <div className="arrow arrow-left" onClick={handlePrevClick}></div>
          <div className="arrow arrow-right" onClick={handleNextClick}></div>
          <div className="roll">
            <Carousel speed={1000} ref={bannersRef} dots={false}>
              {[0, 1].map((item) => {
                return (
                  <div key={item}>
                    <div className="album-list">
                      {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                        return <NewAlbumItem itemData={album} key={album.id} />
                      })}
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
