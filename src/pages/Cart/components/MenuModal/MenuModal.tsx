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
interface HairServiceType {
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
  const [hairServices, setHairServices] = useState<HairServiceType>({});

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

  return (
    <MenuWrapper>
      <Navbar closeMenu={closeMenu} />
      <MenuBox>
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
      </MenuBox>

      <CompleteButton onClick={closeMenu}>완료</CompleteButton>
    </MenuWrapper>
  );
}

export const MenuWrapper = styled.div`
  width: 100vw;
  height: 1000px;
  z-index: 12;
`;

export const MenuBox = styled.div`
  width: 350px;
  height: 600px;
  margin: 0px;
`;

const ServiceTitle = styled.div`
  width: 345px;
  margin-bottom: 15px;
  color: grey;
  border-bottom: 1px solid silver;
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

  background: #b8abf3;
  &:hover {
    background: #9885f0;
  }
  &:active {
    background: #b8aaf6;
  }
`;
