import styled from 'styled-components'

export const MenuPlaylistWrapper = styled.div`
  .menu-playlist {
    ${(props) => props.theme.mixin.wrapV2}
    background: url(${require('@/assets/img/main_bg.png')}) repeat;
    height: 1000px;

    display: flex;
    flex-direction: row;
  }
`

export const PlaylistLeftWrapper = styled.div`
  width: 729px;
  box-sizing: border-box;
  padding: 47px 30px 40px 39px;

  .left-header {
    display: flex;
    gap: 30px;

    .img-cover {
      position: relative;
      width: 200px;
      height: 200px;

      .header-img {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
      }

      .mask {
        position: absolute;
        top: -5px;
        left: -5px;
        display: block;
        width: 208px;
        height: 208px;
        background-color: #fff;
        border: 1px solid #eee;
      }
    }

    .info {
      display: flex;
      flex-direction: column;

      .info-name {
        display: flex;
        align-items: center;

        .song-icon {
          display: block;
          width: 54px;
          height: 24px;
          background: url(${require('@/assets/img/wyy_iconall.png')}) no-repeat 0 -243px;
          margin-right: 8px;
        }

        .name {
          color: #333;
          font-size: 20px;
        }
      }

      .creator {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        .creator-img {
          width: 35px;
          height: 35px;
        }

        .creator-name {
          font-size: 12px;
          color: #0c73c2;
        }

        .creator-level {
          position: relative;
          left: -8px;
          top: 2px;
          width: 13px;
          height: 13px;
        }

        .creator-date {
          color: #999;
          font-size: 10px;
        }
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 25px;

        .tags-label {
          font-size: 12px;
          color: #666;
        }

        .tag {
          padding: 5px 14px;
          background-color: #eee;
          border-radius: 16px;
          font-size: 12px;
          color: #777;
          border: 1px solid #eee;
        }
      }

      .desc {
        max-width: 410px;
        margin-top: 10px;
        color: #666;
        font-size: 12px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
    }
  }
`

export const PlaylistRightWrapper = styled.div`
  width: 250px;
`
