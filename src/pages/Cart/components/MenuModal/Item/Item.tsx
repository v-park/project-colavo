import React from 'react';
import styled from 'styled-components';

interface ItemType {
  service: {
    count: number;
    name: string;
    price: number;
  };
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Item(props: ItemType) {
  const { name, price } = props.service;
  const { handleChecked } = props;

  return (
    <ItemWrapper>
      <ItemSingleWrapper>
        <ItemInfoWrapper>
          <ServiceName key={name}>{name}</ServiceName>
          <ServicePrice>{price}원</ServicePrice>
        </ItemInfoWrapper>

        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            name={name}
            onChange={handleChecked}
            value={price}
          />
        </CheckboxWrapper>
      </ItemSingleWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.form`
  margin: 15px;
`;
const ItemSingleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemInfoWrapper = styled.div``;
const ServiceName = styled.div``;
const ServicePrice = styled.div``;

const CheckboxWrapper = styled.div`
  align-self: center;
`;
const Checkbox = styled.input``;
