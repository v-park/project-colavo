import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from './components/Button';
import NextButton from './components/NextButton';

export default function Cart() {
  const navigate = useNavigate();

  const showMenu = () => {
    navigate('/src/pages/Menu/Menu.tsx');
  };
  return (
    <CartBox>
      <Header>
        <HeaderWrapper>
          <CloseButton />
          <CustomerWrapper>
            <CustomerName>이가을</CustomerName>
            <Date></Date>
          </CustomerWrapper>
        </HeaderWrapper>
        <ButtonWrapper>
          <Button onClick={() => showMenu()}>시술</Button>
          <Button>할인</Button>
        </ButtonWrapper>
        <Line />
      </Header>

      <Footer>
        <Line />
        <TotalAmount>
          <span>합계</span>
          <span>원</span>
        </TotalAmount>
        <NextButton></NextButton>
      </Footer>
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
