import Navbar from '../../../../components/Navbar';
import React from 'react';
import * as S from '../MenuModal/MenuModal';
import DiscountItem from './components/DiscountItem';

interface Discount {
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
}: Discount) {
  return (
    <S.MenuWrapper>
      <Navbar closeMenu={closeMenu} />
      <S.ListBox>
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
      </S.ListBox>
    </S.MenuWrapper>
  );
}
