import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;
