import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 0;
  right: 0;
  left: 0;
  height: 52px;
  background: url(${require('@/assets/img/playbar_sprite.png')}) 0 0;
  background-repeat: repeat;

  .content {
    ${(props) => props.theme.mixin.wrapV3}
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

interface IControlProps {
  isPlaying: boolean
}
export const BarControlWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'isPlaying'
})<IControlProps>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    display: block;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background: url(${require('@/assets/img/playbar_sprite.png')}) 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background: url(${require('@/assets/img/playbar_sprite.png')});
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};

    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background: url(${require('@/assets/img/playbar_sprite.png')}) -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const BarPlayWrapper = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;
      font-size: 12px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: 2px;
        width: 466px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/statbar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/statbar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -5px;
          background: url(${require('@/assets/img/wyy_icon.png')}) 0 -250px;

          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }
      }

      .time {
        display: flex;
        font-size: 12px;
        color: #797979;
        position: relative;
        top: 4px;
        margin-left: 18px;

        .current {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

interface IBarOperatorProps {
  playMode: number
}

export const BarOperatorWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'playMode'
})<IBarOperatorProps>`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 3px;

  .btn {
    display: block;
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;

    .pip {
      background: url(${require('@/assets/img/pip.png')});

      &:hover {
        background-position: 0 -25px;
      }
    }

    .favor {
      background: url(${require('@/assets/img/playbar_sprite.png')}) -88px -163px;

      &:hover {
        background-position: -88px -189px;
      }
    }

    .share {
      background: url(${require('@/assets/img/playbar_sprite.png')}) -114px -163px;

      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    /* background: url(${require('@/assets/img/playbar_sprite.png')}) -147px -248px; */

    .volume {
      background: url(${require('@/assets/img/playbar_sprite.png')}) -2px -248px;

      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background: url(${require('@/assets/img/playbar_sprite.png')});
      background-position: ${(props) => {
        switch (props.playMode) {
          case 0:
            return '-3px -343px'
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return ''
        }
      }};
    }

    .playlist {
      background: url(${require('@/assets/img/playbar_sprite.png')}) -42px -68px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
      width: 38px;
      height: 25px;
      padding-left: 21px;
      text-align: center;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`
