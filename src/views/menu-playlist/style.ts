import styled from 'styled-components'

export const MenuPlaylistWrapper = styled.div`
  .menu-playlist {
    ${(props) => props.theme.mixin.wrapV2}
    background: url(${require('@/assets/img/main_bg.png')}) repeat;
    height: 1000px;

    display: flex;
    flex-direction: row;
  }
`

export const PlaylistLeftWrapper = styled.div`
  width: 729px;
  box-sizing: border-box;
  padding: 47px 30px 40px 39px;
`

export const PlaylistRightWrapper = styled.div`
  width: 250px;
`
