import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 30px;

  .hot-radios {
    margin: 20px 0 0 20px;

    .item {
      display: flex;
      width: 210px;
      height: 50px;
      cursor: pointer;

      .head {
        width: 40px;
        height: 40px;
        border-radius: 3px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        width: 160px;
        font-size: 12px;
        padding-left: 10px;

        .name {
          color: #000;
          margin-top: 3px;

          &:hover {
            text-decoration: underline;
          }
        }

        .desc {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-top: 5px;
          color: #666;
        }
      }
    }
  }
`
