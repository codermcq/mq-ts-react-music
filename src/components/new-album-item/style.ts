import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .cover {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    &:hover .icon-play {
      display: inline-block;
    }

    img {
      width: 100px;
      height: 100px;
    }

    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url(${require('@/assets/img/wyy_cover.png')}) no-repeat 0 -570px;
      text-indent: -9999px;
    }

    .icon-play {
      display: none;
      position: absolute;
      bottom: 5px;
      right: 25px;
      width: 22px;
      height: 22px;
      background: url(${require('@/assets/img/wyy_icon.png')}) no-repeat 0 -85px;

      &:hover {
        background-position: 0 -110px;
      }
    }
  }

  .info {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
