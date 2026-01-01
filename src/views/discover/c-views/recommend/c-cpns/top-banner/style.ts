import styled from 'styled-components'
import bannerImg from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  background-position: center center / 6000px;
  .banner {
    display: flex;
    position: relative;
    height: 285px;
    ${(props) => props.theme.mixin.wrapV2}
  }
`
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 100%;
    }
  }

  .dots {
    position: absolute;
    z-index: 98;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      display: block;
      margin: 0 2px;
    }

    .item {
      display: block;
      width: 20px !important;
      height: 20px !important;
      background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 3px -343px;
      cursor: pointer;

      &:hover,
      &.active {
        background-position: -16px -343px;
      }
    }
  }
`

export const BannerRight = styled.div`
  .download {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 285px;
    background: url(${require('@/assets/img/download_sprite.png')});

    .text {
      position: absolute;
      bottom: 20px;
      margin: 0 10px;
      text-align: center;
      font-size: 12px;
      color: #8d8d8d;
    }
  }
`

export const BannerControl = styled.div`
  .control {
    display: block;
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    text-indent: -9999px;
    background: url(${bannerImg}) no-repeat;
    cursor: pointer;

    &.left {
      left: -50px;
      background-position: 0 -360px;
      transform: translate(-50%, -50%);

      &:hover {
        background-position: 0 -430px;
      }
    }

    &.right {
      right: -50px;
      background-position: 0 -508px;

      transform: translate(50%, -50%);
      &:hover {
        background-position: 0 -578px;
      }
    }
  }
`
