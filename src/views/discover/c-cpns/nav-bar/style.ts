import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  border-bottom: 1px solid #a40011;

  .nav {
    ${(props) => props.theme.mixin.wrapV1}
    display: flex;
    height: 34px;
    padding: 0 0 0 180px;
    box-sizing: border-box;
    position: relative;

    .item {
      a {
        display: block;
        color: white;
        height: 20px;
        line-height: 21px;
        margin: 5px 17px 0;
        padding: 0 13px;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
