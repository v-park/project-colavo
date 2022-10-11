import React from 'react';
import Navbar from '../../../../components/Navbar';
import DiscountItem from './components/DiscountItem';
import NextButton from '../NextButton';
import styled from 'styled-components';
import * as S from '../MenuModal/MenuModal';

interface DiscountType {
  discountData: {
    name: string;
    discountRate: number;
  }[];
  closeMenu: () => void;
  handleDiscountChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DiscountModal({
  discountData,
  closeMenu,
  handleDiscountChecked,
}: DiscountType) {
  return (
    <S.MenuWrapper>
      <Navbar closeMenu={closeMenu} />
      <S.MenuBox>
        {discountData.map((discount) => {
          return (
            <>
              <DiscountItem
                discount={discount}
                handleDiscountChecked={handleDiscountChecked}
              />
            </>
          );
        })}

        <Body />

        <ButtonWrapper>
          <NextButton closeMenu={closeMenu} />
        </ButtonWrapper>
      </S.MenuBox>
    </S.MenuWrapper>
  );
}

const Body = styled.div`
  height: 300px;
`;
const ButtonWrapper = styled.div`
  height: 100px;
`;
