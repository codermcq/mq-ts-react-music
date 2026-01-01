import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  background-color: #f5f5f5;
  height: 325px;
  .inner {
    ${(props) => props.theme.mixin.wrapV2}
  }

  .enter {
    display: flex;
    justify-content: center;
    margin-top: 33px;

    .item {
      width: 45px;
      text-align: center;
      margin-left: 80px;

      .link {
        display: block;
        width: 45px;
        height: 45px;
        background: url(${require('@/assets/img/foot_logo.png')}) no-repeat;
        background-size: 220px 220px;
      }

      .text {
        display: inline-block;
        width: 100px;
        margin-top: 10px;
        margin-left: -27.5px;
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    :nth-child(1) {
      margin-left: 0;
    }

    :nth-child(1) .link {
      background-position: -170px -5px;

      &:hover {
        background-position: -5px -115px;
      }
    }

    :nth-child(2) .link {
      background-position: -5px -170px;

      &:hover {
        background-position: -60px -170px;
      }
    }

    :nth-child(3) .link {
      background-image: url(${require('@/assets/img/foot_logo_xStudio.png')});
      background-size: 45px;

      &:hover {
        background-image: url(${require('@/assets/img/foot_logo_xStudio_02.png')});
      }
    }

    :nth-child(4) .link {
      background-position: -60px -60px;

      &:hover {
        background-position: -115px -5px;
      }
    }

    :nth-child(5) .link {
      background-image: url(${require('@/assets/img/foot_logo_AI.png')});
      background-size: 45px;

      &:hover {
        background-image: url(${require('@/assets/img/foot_logo_AI_02.png')});
      }
    }

    :nth-child(6) .link {
      background-image: url(${require('@/assets/img/foot_logo_recommend.png')});
      background-size: 45px;

      &:hover {
        background-image: url(${require('@/assets/img/foot_logo_recommend_02.png')});
      }
    }

    :nth-child(7) .link {
      background-position: -170px -115px;

      &:hover {
        background-position: -60px -115px;
      }
    }
  }

  .copy {
    padding-top: 60px;
    line-height: 24px;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    color: #666;

    .link {
      .item {
        font-size: 12px;

        &:hover {
          text-decoration: underline;
        }
      }

      .divier {
        color: #d9d9d9;
        margin: 0 8px 0 8px;
      }
    }

    .undeline {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }

    .sep {
      margin-right: 14px;
    }
  }
`
