import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function List() {
  const [hairServices, setHairServices] = useState<any>({});

  // const fetchHairServices = async () => {
  //   return await axios
  //     .get(
  //       'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData',
  //     )
  //     .then((res) => console.log(res.data.items));
  // };

  useEffect(() => {
    axios
      .get(
        'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData',
      )
      .then((res) => {
        console.log(Object.keys(res.data.items));
        setHairServices(res.data.items);
      });
    // fetchHairServices();
  }, []);

  return (
    <ListBox>
      {Object.keys(hairServices).map((hairServiceKey) => {
        return (
          <li key={hairServices[hairServiceKey].count}>
            {hairServices[hairServiceKey].name}
          </li>
        );
      })}
    </ListBox>
  );
}

const ListBox = styled.div`
  width: 390px;
  height: 564px;
`;
