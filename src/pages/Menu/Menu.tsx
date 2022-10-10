import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Item from './Item/Item';

export default function List() {
  const [hairServices, setHairServices] = useState({});
  const [checkedServices, setCheckedServices] = useState({
    여성컷: '',
    남성컷: '',
    드라이: '',
    소녀컷: '',
    소년컷: '',
    기본펌: '',
    아주비싼펌: '',
    염색: '',
    부분염색: '',
  });

  useEffect(() => {
    axios
      .get(
        'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData',
      )
      .then((res) => {
        // console.log(Object.keys(res.data.items));
        setHairServices(res.data.items);
      });
  }, []);

  const handleChecked = (e: any) => {
    const { name, checked } = e.target;
    // console.log(e.target.checked);
    setCheckedServices({ ...checkedServices, [name]: checked });
    // console.log(name, checked);
  };
  // console.log(checkedServices);

  const services = Object.values(hairServices);
  console.log(services);
  const cut = services.filter((service: any) => service.name.includes('컷'));
  const blowout = services.filter((service: any) => service.name === '드라이');
  const perm = services.filter((service: any) => service.name.includes('펌'));
  const dye = services.filter((service: any) => service.name.includes('염색'));

  return (
    <>
      <MenuWrapper>
        <Navbar />
        <ListBox>
          <ServiceTitle>커트</ServiceTitle>
          {cut.map((cut) => {
            return (
              <Item
                service={cut}
                checkedServices={checkedServices}
                handleChecked={handleChecked}
              />
            );
          })}
          <ServiceTitle>드라이</ServiceTitle>
          {blowout.map((blowout) => {
            return <Item service={blowout} />;
          })}

          <ServiceTitle>펌</ServiceTitle>
          {perm.map((perm) => {
            return <Item service={perm} />;
          })}
          <ServiceTitle>염색</ServiceTitle>
          {dye.map((dye) => {
            return <Item service={dye} />;
          })}
        </ListBox>
      </MenuWrapper>
    </>
  );
}

const MenuWrapper = styled.div``;

const ListBox = styled.div`
  width: 390px;
  height: 564px;
`;

const ServiceTitle = styled.div`
  width: 300px;
  border-bottom: 1px solid black;
`;
