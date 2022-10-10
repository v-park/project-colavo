import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../../../../components/Navbar';
import Item from './Item/Item';

interface Props {
  handleMenu: () => void;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeMenu: () => void;
}
interface Type {
  [key: string]: {
    count: number;
    name: string;
    price: number;
  };
}

export default function MenuModal({
  handleMenu,
  handleChecked,
  closeMenu,
}: Props) {
  const [hairServices, setHairServices] = useState<Type>({});

  useEffect(() => {
    axios
      .get(
        'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData',
      )
      .then((res) => {
        setHairServices(res.data.items);
      });
  }, []);

  const services = Object.values(hairServices);

  const cut = services.filter((service) => service.name.includes('컷'));
  const blowout = services.filter((service) => service.name === '드라이');
  const perm = services.filter((service) => service.name.includes('펌'));
  const dye = services.filter((service) => service.name.includes('염색'));

  return (
    <>
      <MenuWrapper>
        <Navbar closeMenu={closeMenu} />
        <ListBox>
          <ServiceTitle>커트</ServiceTitle>
          {cut.map((cut) => {
            return <Item service={cut} handleChecked={handleChecked} />;
          })}
          <ServiceTitle>드라이</ServiceTitle>
          {blowout.map((blowout) => {
            return <Item service={blowout} handleChecked={handleChecked} />;
          })}

          <ServiceTitle>펌</ServiceTitle>
          {perm.map((perm) => {
            return <Item service={perm} handleChecked={handleChecked} />;
          })}
          <ServiceTitle>염색</ServiceTitle>
          {dye.map((dye) => {
            return <Item service={dye} handleChecked={handleChecked} />;
          })}
        </ListBox>
        <CompleteButton onClick={closeMenu}>완료</CompleteButton>
      </MenuWrapper>
    </>
  );
}

export const MenuWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const ListBox = styled.div`
  width: 390px;
  height: 564px;
`;

const ServiceTitle = styled.div`
  width: 300px;
  border-bottom: 1px solid black;
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
