import styled from "styled-components";

export const HeaderV2Wrapper = styled.div`
  .header {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    height: 23px;
    border-bottom: 1px solid #ccc;

    .moreText {
      color: #666;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
