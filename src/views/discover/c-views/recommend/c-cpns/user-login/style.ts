import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  .vip {
    width: 100%;
    height: 90px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .user {
    .cover {
      height: 126px;
      background: url(${require('@/assets/img/main_sprite.png')}) no-repeat 0 0;
    }

    .text {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      font-size: 12px;
      color: #666;
    }

    .login {
      display: block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      margin: 0 auto;
      font-size: 12px;
      background: url(${require('@/assets/img/main_sprite.png')}) no-repeat 0 -195px;
    }
  }
`
