import styled from "styled-components";

export const Wrapper = styled.div<{ height: number }>`
  /* width: 100vw; */
  height: ${props => props.height}px;
  overflow-y: scroll;
  background: #ffffff;
`;
