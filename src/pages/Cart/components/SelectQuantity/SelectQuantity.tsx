import React, { useState } from 'react';
import styled from 'styled-components';

export default function SelectQuantity() {
  const [isQuantityOpen, setIsQuantityOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (option: number) => {
    setQuantity(option);
    setIsQuantityOpen(false);
  };
  console.log(quantity);
  return (
    <SelectBox>
      <SelectTitle onClick={() => setIsQuantityOpen(!isQuantityOpen)}>
        {quantity}
      </SelectTitle>
      {isQuantityOpen && (
        <SelectWrapper>
          {[1, 2, 3, 4, 5].map((option, index) => {
            return (
              <SelectOption value={option} key={index}>
                <button onClick={() => handleQuantity(option)}>{option}</button>
              </SelectOption>
            );
          })}
        </SelectWrapper>
      )}
    </SelectBox>
  );
}

export const SelectOption = styled.li`
  list-style: none;

  button {
    font-size: 12px;
    font-weight: 500;
    height: 32px;
    line-height: 32px;
    width: 100%;
    text-align: left;
    padding: 0 14px;
    border: 0;
    background: none;
    border-radius: 0;
    &:hover {
      background: #eeeeee;
    }
  }
`;
export const SelectWrapper = styled.ul`
  background: #f8f8f8;
  border-radius: 4px;
  padding: 8px 0;
  max-height: 112px;
  width: 120px;
  overflow: auto;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);

  margin: 0;
`;

export const SelectBox = styled.section`
  position: relative;
  width: 120px;
`;

export const SelectTitle = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #bbbbbb;
  background-color: white;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  padding-left: 12px;
  line-height: 30px;
  position: relative;
`;
