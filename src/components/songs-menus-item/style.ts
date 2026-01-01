import styled from "styled-components";

export const MenuItemWrapper = styled.div`
  width: 140px;
  height: 188px;
  /* margin: 15px 0; */

  .top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${require('@/assets/img/wyy_cover.png')}) no-repeat 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: url(${require('@/assets/img/wyy_cover.png')}) no-repeat 0 -537px;
        color: #ccc;
        height: 27px;

        .icon-headest {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background: url(${require('@/assets/img/wyy_icon.png')}) no-repeat 0 -24px ;
        }

        .count {
          font-size: 12px;
          color: #ccc;
        }

        .icon-play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background: url(${require('@/assets/img/wyy_icon.png')}) no-repeat 0 0;

          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }

  .bottom {
    font-size: 14px;
    color: #000;
    margin: 8px 0 3px;

    &:hover {
      text-decoration: underline;
    }
  }
`
