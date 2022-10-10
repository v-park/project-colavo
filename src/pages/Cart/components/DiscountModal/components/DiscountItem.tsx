import React from 'react';

interface DiscountItemType {
  discount: {
    name: string;
    discountRate: number;
  };
  handleDiscountChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DiscountItem({
  discount: { name, discountRate },
  handleDiscountChecked,
}: DiscountItemType) {
  return (
    <>
      <div>
        {name}
        {discountRate}
      </div>
      <input
        type="checkbox"
        value={discountRate}
        name={name}
        onChange={handleDiscountChecked}
      />
    </>
  );
}
