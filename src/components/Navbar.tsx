import styled from 'styled-components';

interface NavType {
  closeMenu: () => void;
}

export default function Navbar({ closeMenu }: NavType) {
  return (
    <NavbarWrapper>
      <CloseButton onClick={closeMenu}>x</CloseButton>
      <NavTitle />
      <AddButton>+</AddButton>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 100px;
`;

const CloseButton = styled.div`
  margin: 0px;
  border: none;
  align-self: top;
  background: none;
  color: #c8cfd9;
  font-weight: 300;
  font-size: 2rem;
  cursor: pointer;
`;
const NavTitle = styled.div`
  align-self: center;
`;

const AddButton = styled(CloseButton)`
  margin-right: 5px;
`;
