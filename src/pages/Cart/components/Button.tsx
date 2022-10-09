import React from 'react';
import styled from 'styled-components';

export default function Button(props: any) {
  return <StyledButton>시술</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 7rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #ffa4c8;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;

  background: #fdf1f5;
  &:hover {
    background: #fdf1f5;
  }
  &:active {
    background: #fdf1f5;
  }
`;
