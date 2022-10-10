import React, { useState } from 'react';
import styled from 'styled-components';
import CloseButton from 'react-bootstrap/CloseButton';
import NextButton from './components/NextButton';
import MenuModal from '../Cart/components/MenuModal/MenuModal';
import DiscountModal from './components/DiscountModal/DiscountModal';
import SelectQuantity from './components/SelectQuantity/SelectQuantity';

const DISCOUNT_DATA = [
  {
    name: '신규 할인',
    discountRate: 5000,
  },
  {
    name: '여름프로모션',
    discountRate: 0.3,
  },
  {
    name: '현금 할인',
    discountRate: 0.05,
  },
  {
    name: '회원 할인',
    discountRate: 0.05,
  },
];

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState('');
  const [checkedServices, setCheckedServices] = useState({});
  const [checkedDiscounts, setCheckedDiscounts] = useState({});

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setCheckedServices({
        ...checkedServices,
        [name]: value,
      });
    } else {
      setCheckedServices({
        ...checkedServices,
        [name]: '',
      });
    }
  };

  const handleDiscountChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setCheckedDiscounts({
        ...checkedDiscounts,
        [name]: value,
      });
    } else {
      setCheckedDiscounts({
        ...checkedDiscounts,
        [name]: '',
      });
    }
  };

  const handleMenu = () => {
    setIsModalOpen('menu');
  };
  const closeMenu = () => {
    setIsModalOpen('');
  };

  const handleDiscount = () => {
    setIsModalOpen('discount');
  };

  return (
    <CartBox>
      {isModalOpen === 'menu' && (
        <MenuModal
          handleMenu={handleMenu}
          handleChecked={handleChecked}
          closeMenu={closeMenu}
        />
      )}

      {isModalOpen === 'discount' && (
        <DiscountModal
          closeMenu={closeMenu}
          discountData={DISCOUNT_DATA}
          handleDiscountChecked={handleDiscountChecked}
        />
      )}
      <CartWrap>
        <Header>
          <HeaderWrapper>
            <CloseButton />
            <CustomerWrapper>
              <CustomerName>이가을</CustomerName>
              <Date></Date>
            </CustomerWrapper>
          </HeaderWrapper>
          <ButtonWrapper>
            <ServiceButton onClick={handleMenu}>시술</ServiceButton>
            <DiscountButton onClick={handleDiscount}>할인</DiscountButton>
          </ButtonWrapper>
          <Line />
        </Header>

        {Object.entries(checkedServices).map((el: any) => {
          return (
            <div>
              <span>{el[0]}</span>
              <span>{el[1]}</span>
              <SelectQuantity />
            </div>
          );
        })}
        {Object.entries(checkedDiscounts).map((el: any) => {
          return (
            <div>
              <span>{el[0]}</span>
              <span>{el[1]}</span>
            </div>
          );
        })}
        <Footer>
          <Line />
          <TotalAmount>
            <span>합계</span>
            <span> 원</span>
          </TotalAmount>
          <NextButton></NextButton>
        </Footer>
      </CartWrap>
    </CartBox>
  );
}
const CartBox = styled.div`
  width: 350px;
  height: 800px;
  margin: 25px;
`;
const Header = styled.div``;

const HeaderWrapper = styled.div`
  display: flex;
`;

const CustomerWrapper = styled.div`
  margin: 20px;
  justify-content: center;
`;

const CustomerName = styled.div``;
const Date = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Line = styled.hr`
  border: 0.5px dotted;
  &:nth-child(1) {
    border: 0.5px solid;
  }
`;

const Footer = styled.div``;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceButton = styled.button`
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
  color: silver;
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

const DiscountButton = styled(ServiceButton)`
  color: #ffa4c8;

  background: #fdf1f5;
  &:hover {
    background: #fdf1f5;
  }
  &:active {
    background: #fdf1f5;
  }
`;
const CartWrap = styled.div`
  position: fixed;
  z-index: 9;
`;
