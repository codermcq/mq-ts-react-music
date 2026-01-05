import styled from 'styled-components'

export const SongsWrapper = styled.div`
  ${(props) => props.theme.mixin.wrapV2}
  /* background: url(${require('@/assets/img/main_bg.png')}); */
  border: 1px solid #d3d3d3;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;

  .header {
    position: relative;
    width: 900px;
    height: 41px;
    border-bottom: 2px solid #c20c0c;

    h3 {
      display: flex;
      align-items: center;
    }

    .classification {
      font-size: 24px;
      color: #333;
    }

    .classification-btn {
      display: inline-block;
      margin-left: 5px;
      margin: 2px 0 0 12px;
      height: 31px;
      line-height: 31px;
      font-size: 12px;
      text-align: center;
      vertical-align: top;
      background: url(${require('@/assets/img/btn_sprite.png')});
      background-position: right -100px;
      padding-right: 5px;
      font-weight: normal;

      & i {
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        color: #0c73c2 !important;
        padding: 0 10px 0 15px;
        background: url(${require('@/assets/img/btn_sprite.png')});
        background-position: 0 -59px;
      }

      .u-btn {
        display: inline-block;
        width: 8px;
        height: 5px;
        margin-left: 5px;
        background: url(${require('@/assets/img/wyy_iconall.png')}) no-repeat -70px -543px;
        vertical-align: middle;
      }

      &:hover {
        background-position: right -182px;
      }
      &:hover i {
        background-position: 0 -141px;
      }
    }

    .select-catlist {
      position: absolute;
      z-index: 1000;
      top: 55px;
      left: -30px;
      width: 720px;
      height: 500px;
      background-color: #fff;
      box-shadow: 4px 4px 8px 4px rgba(157, 157, 157, 0.5);

      .icon {
        display: inline-block;
        width: 24px;
        height: 11px;
        background: url(${require('@/assets/img/wyy_icon.png')}) no-repeat -48px 0;
        position: absolute;
        top: -12px;
        left: 132px;
      }

      .select-header {
        height: 50px;
        padding: 15px 0 10px 26px;
        box-sizing: border-box;

        .all-btn {
          display: inline-block;
          width: 75px;
          height: 26px;
          font-size: 12px;
          color: #333;
          font-weight: normal;
          text-align: center;
          line-height: 26px;
          background: url(${require('@/assets/img/btn_sprite.png')}) no-repeat 0 -64px;
        }
      }

      .select-content {
        display: flex;
        border-top: 1px solid #e6e6e6;
        height: calc(100% - 50px);

        .content-left {
          display: flex;
          flex-direction: column;
          width: 90px;
          height: 100%;
          border-right: 1px solid #e6e6e6;

          .category-item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            color: #333;
            font-weight: bold;
            font-size: 14px;

            &::before {
              display: inline-block;
              content: ' ';
              width: 23px;
              height: 23px;
              overflow: hidden;
              vertical-align: middle;
              margin-right: 8px;
              margin-bottom: 4px;
              background: url(${require('@/assets/img/wyy_iconall.png')}) no-repeat 0 -9999px;
            }

            &:nth-child(1)::before {
              background-position: -20px -735px;
            }
            &:nth-child(2)::before {
              background-position: 0 -60px;
            }
            &:nth-child(3)::before {
              background-position: 0 -88px;
            }
            &:nth-child(4)::before {
              background-position: 0 -117px;
            }
            &:nth-child(5)::before {
              background-position: 0 -141px;
            }
          }
        }

        .content-right {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          flex: 1;

          .tag {
            flex: 1;
            padding-left: 15px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .tag-item {
              font-size: 12px;
              color: #333;
              font-weight: normal;

              &:hover {
                text-decoration: underline;
              }

              .line {
                margin: 0 8px 0 10px;
                color: #d8d8d8;
              }
            }
          }
        }
      }
    }
  }

  .songsList {
    display: flex;
    flex-wrap: wrap;
    width: 950px;
    margin-left: -50px;
    margin-top: 30px;

    .item {
      padding: 0 0 30px 50px;
      height: 188px;
    }
  }

  i {
    font-style: normal;
  }
`
