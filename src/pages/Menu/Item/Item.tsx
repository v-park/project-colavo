import React from 'react';

// interface Type {
//   service: {
//     count: number;
//     name: string;
//     price: number;
//   };
// }
export default function Item(props: any) {
  const { name, price, count } = props.service;
  const { handleChecked } = props;

  return (
    <form>
      <li key={name}>
        {name}
        {price}
        {count}
      </li>
      <input type="checkbox" name={name} onChange={handleChecked} />
    </form>
  );
}
