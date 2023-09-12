import React from 'react';
import { styled } from 'styled-components';

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  top: 30%;
  width: 3rem;
  height: 1.5rem;
  background: ${({ checked }) => (checked ? '#4EC1BF;' : '#CCC;')};
  display: block;
  border-radius: 19.2px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: ${({ checked }) => (checked ? 'calc(5%)' : 'calc(55%)')};
    top: 2.5px;
    width: 1.1875rem;
    height: 1.1875rem;
    background: #fff;
    border-radius: 15px;
    transition: 0.3s;
  }
`;

interface Props {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ checked, onChange }: Props) => {
  return (
    <StyledLabel htmlFor="checkbox" checked={checked}>
      <input id="checkbox" type="checkbox" checked={checked} onChange={onChange} />
    </StyledLabel>
  );
};

export default Switch;
