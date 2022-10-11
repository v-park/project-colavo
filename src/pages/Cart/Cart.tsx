import React, { useState } from 'react';
import styled from 'styled-components';
import CloseButton from 'react-bootstrap/CloseButton';
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
      {/* <Overlay> */}
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
      {/* </Overlay> */}

      <CartWrap>
        <Header>
          <HeaderWrapper>
            <CloseButton />
            <CustomerWrapper>
              <CustomerName>이가을</CustomerName>
            </CustomerWrapper>
          </HeaderWrapper>
          <ButtonWrapper>
            <ServiceButton onClick={handleMenu}>시술</ServiceButton>
            <DiscountButton onClick={handleDiscount}>할인</DiscountButton>
          </ButtonWrapper>
          <Line />
        </Header>

        <Body>
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
        </Body>

        <Footer>
          <Line />
          <TotalAmount>
            <TotalText>합계</TotalText>
            <WonCurrency>원</WonCurrency>
          </TotalAmount>
          <CompleteButton>완료</CompleteButton>
        </Footer>
      </CartWrap>
    </CartBox>
  );
}
const CartBox = styled.div`
  width: 350px;
  height: 780px;
  margin: 25px;
`;

// const ModalWrap = styled.div`
//   z-index: 10;
//   position: relative;
// `;
const CartWrap = styled.div`
  position: fixed;
  z-index: 8;
`;

const Header = styled.div``;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const CustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 250px;
  justify-content: center;
`;

const CustomerName = styled.div`
  align-self: center;
  font-size: 13px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ServiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 9rem;
  height: 2.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #90979d;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;

  background: #f7f7f7;
  &:hover {
    background: #f7f7f7;
  }
  &:active {
    background: #dedddd;
  }
`;

const DiscountButton = styled(ServiceButton)`
  color: #ffa4c8;

  background: #fdf1f5;
  &:hover {
    background: #fdf1f5;
  }
  &:active {
    background: #fcdde8;
  }
`;

const Body = styled.div`
  width: 345px;
  height: 460px;
`;

const CompleteButton = styled.button`
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

const Footer = styled.div``;

const Line = styled.hr`
  border: 0.5px dotted;
  &:nth-child(1) {
    border: 0.5px solid;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  font-size: 14px;
`;

const TotalText = styled.div`
  align-self: center;
  color: #90979d;
`;
const WonCurrency = styled.div`
  font-size: 24px;
  font-weight: 200;
`;
