import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  margin-top: 40px;

  > .content {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;

    .inner {
      position: relative;
      height: 184px;
      padding: 0 20px;
      background: #f5f5f5;
      border: 1px solid #fff;
      overflow: hidden;
    }

    .arrow {
      position: absolute;
      z-index: 10;
      top: 50%;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      left: -5px;
      transform: translate(50%, -50%);
      background: url(${require('@/assets/img/main_sprite.png')}) no-repeat -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      right: -5px;
      transform: translate(-50%, -50%);
      background: url(${require('@/assets/img/main_sprite.png')}) no-repeat -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }
  }

  .roll {
    overflow: hidden;

    .album-list {
      width: 645px;
      margin-top: 28px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-left: 5px;
    }
  }
`
