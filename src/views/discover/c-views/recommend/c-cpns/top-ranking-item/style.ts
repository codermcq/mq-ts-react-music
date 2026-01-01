import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  width: 230px;

  &:last-child {
    width: 228px;
  }

  .top {
    display: flex;
    padding: 20px 0 0 19px;
    height: 120px;
    box-sizing: border-box;

    .cover {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        height: 100%;
        width: 100%;
      }

      .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url(${require('@/assets/img/wyy_cover.png')}) no-repeat -145px -57px;
      }
    }

    .info {
      flex: 1;
      margin: 6px 0 0 10px;

      .title {
        height: 20px;
        color: #333;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }

      .icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-top: 5px;
        margin-right: 10px;
        text-indent: -9999px;
        background: url(${require('@/assets/img/main_sprite.png')}) no-repeat;

        &.icon-play {
          background-position: -267px -205px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        &.icon-favor {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .list {
    overflow: hidden;
    :nth-child(-n + 3) .index {
      color: #c10d0c;
    }

    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      width: 230px;

      .index {
        width: 35px;
        text-align: center;
        align-items: center;
        margin-left: 10px;
        font-size: 16px;
      }

      .info {
        flex: 1;
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .icon {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
            text-indent: -999px;
            background: url(${require('@/assets/img/main_sprite.png')}) no-repeat;
          }

          .icon-play {
            background-position: -267px -268px;

            &:hover {
              background-position: -267px -288px;
            }
          }

          .icon-add {
            background: url(${require('@/assets/img/wyy_iconall.png')}) no-repeat 0 -700px;
            position: relative;
            top: 2px;

            &:hover {
              background-position: -22px -700px;
            }
          }

          .icon-favor {
            background-position: -297px -268px;

            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .more {
    text-align: right;
    height: 32px;
    line-height: 32px;
    margin-right: 32px;

    .text {
      color: #000;
      font-size: 12px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
