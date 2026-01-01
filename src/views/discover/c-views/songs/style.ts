import styled from 'styled-components'

export const SongsWrapper = styled.div`
  ${(props) => props.theme.mixin.wrapV2}
  /* background: url(${require('@/assets/img/main_bg.png')}); */
  border: 1px solid #d3d3d3;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;

  .header {
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
