import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;

  .singer-list {
    margin: 6px 0 14px 20px;

    .item {
      display: flex;
      width: 210px;
      height: 62px;
      background: #fafafa;
      margin-top: 14px;
      cursor: pointer;

      &:hover {
        background: #f5f5f5;
      }

      .head {
        width: 62px;
        height: 62px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        /* width: 133px; */
        flex: 1;
        height: 60px;
        text-align: left;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        border-radius: 2px;

        .name {
          font-size: 14px;
          margin-top: 8px;
          color: #333;
        }

        .alias {
          margin-top: 8px;
          color: #666;
          font-size: 12px;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;

    .btn {
      margin-left: 20px;
      padding: 0 5px 0 0;
      border-radius: 4px;
      background: url(${require('@/assets/img/btn_sprite.png')}) no-repeat right -100px;

      &:hover i {
        background-position: 0 -141px;;
      }
    }

    i {
      display: inline-block;
      width: 170px;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      vertical-align: top;
      text-align: center;
      font-style: normal;
      font-weight: bold;
      cursor: pointer;
      padding: 0 15px 0 20px;
      font-size: 12px;
      background: url(${require('@/assets/img/btn_sprite.png')}) no-repeat 0 -59px;
    }
  }
`
