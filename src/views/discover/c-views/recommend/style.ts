import { request } from 'http'
import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;
    background: url(${require('@/assets/img/main_bg.png')});
    ${(props) => props.theme.mixin.wrapV2}
    border: 1px solid #d3d3d3;
  }
`
export const RecommendLeft = styled.div`
  padding: 20px 20px 40px;
  width: 729px;
  box-sizing: border-box;
`

export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;


`
