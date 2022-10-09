import React from 'react';
import styled from 'styled-components';

export default function NextButton(props: any) {
  return <StyledNextButton>다음</StyledNextButton>;
}

const StyledNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 20px 10px 20px 10px;
  width: 20rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  background: #9885f0;
  &:hover {
    background: #9885f0;
  }
  &:active {
    background: #b8aaf6;
  }
`;
