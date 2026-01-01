import React, { ElementRef, FC, memo, ReactNode, useRef, useState } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import { shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { CarouselRef } from 'antd/es/carousel'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const [currentIndex, steCurrentIndex] = useState(0)

  const bannersRef = useRef<CarouselRef>(null)

  function controlClickHandle(isRight = true) {
    if (isRight) {
      bannersRef?.current?.next()
    } else {
      bannersRef?.current?.prev()
    }
  }

  function handleAfter(current: number) {
    steCurrentIndex(current)
  }

  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) {
    bgImgUrl = bgImgUrl + '?imageView&blur=40x20'
  }

  const dotsItemClickHandle = (slideNumber: number) => {
    bannersRef?.current?.goTo(slideNumber)
  }

  return (
    <BannerWrapper style={{ background: `url('${bgImgUrl}')` }}>
      <div className="banner">
        <BannerLeft>
          <Carousel
            fade
            dots={false}
            autoplay
            autoplaySpeed={3000}
            ref={bannersRef}
            afterChange={handleAfter}
          >
            {banners.map((item) => {
              return (
                <div className="item" key={item.typeTitle}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <div className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.url} onClick={() => dotsItemClickHandle(index)}>
                  <a
                    className={classNames('item', { active: index === currentIndex })}
                    href="#"
                  ></a>
                </li>
              )
            })}
          </div>
        </BannerLeft>
        <BannerRight>
          <div className="download">
            <a href="https://music.163.com/#/download"></a>
            <p className="text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </BannerRight>
        <BannerControl>
          <div className="control left" onClick={() => controlClickHandle(false)}>
            Left
          </div>
          <div className="control right" onClick={() => controlClickHandle(true)}>
            Right
          </div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
