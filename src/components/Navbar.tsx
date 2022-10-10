import React from 'react';
import styled from 'styled-components';

interface NavType {
  closeMenu: () => void;
}

export default function Navbar({ closeMenu }: NavType) {
  return (
    <NavbarWrapper>
      <button onClick={closeMenu}>x</button>
      <NavTitle />
      <AddButton>+</AddButton>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavTitle = styled.div``;

const AddButton = styled.button`
  margin: 5px;
  border: none;
  background: none;
  color: #c8cfd9;
  font-weight: 300;
  font-size: 2rem;
  cursor: pointer;
`;
