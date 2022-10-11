import React from 'react';
import styled from 'styled-components';

interface DiscountItemType {
  discount: {
    name: string;
    discountRate: number;
  };
  handleDiscountChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DiscountItem({
  discount: { name, discountRate },
  handleDiscountChecked,
}: DiscountItemType) {
  return (
    <>
      <DiscountWrapper>
        <DiscountTitleWrapper>
          {name}
          <div>{discountRate}</div>
        </DiscountTitleWrapper>

        <CheckboxWrapper>
          <input
            type="checkbox"
            value={discountRate}
            name={name}
            onChange={handleDiscountChecked}
          />
        </CheckboxWrapper>
      </DiscountWrapper>
    </>
  );
}

const DiscountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
`;

const DiscountTitleWrapper = styled.div``;

const CheckboxWrapper = styled.div`
  align-self: center;
`;
