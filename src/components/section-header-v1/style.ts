import styled from 'styled-components'

export const HeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background: url(${require('@/assets/img/main_sprite.png')}) no-repeat -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      color: #333;
      font-weight: normal;
      margin-right: 20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .link {
          color: #666;
          font-size: 12px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }
        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .more {
      font-size: 12px;
      color: #666;

      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      display: block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background: url(${require('@/assets/img/main_sprite.png')}) no-repeat 0 -240px;
    }
  }
`
