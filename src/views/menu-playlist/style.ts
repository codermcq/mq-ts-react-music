import styled from 'styled-components'

export const MenuPlaylistWrapper = styled.div`
  .menu-playlist {
    ${(props) => props.theme.mixin.wrapV4}
    background: url(${require('@/assets/img/main_bg.png')}) repeat;
    height: 1000px;
  }
`
