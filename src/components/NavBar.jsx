import styled from "@emotion/styled";

import Logo from "./Logo";
import Carro from "./Carro";

const Nav = styled.nav`

  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 60px;
  box-shadow: 0 2px 3px rgb(0,0,0,.1);

`
const NavBar = ({ carro, carroVisible, mostrarCarro }) => {
  return (
    <Nav>
      <Logo />
      <Carro
        carro={carro}
        carroVisible={carroVisible}
        mostrarCarro={mostrarCarro}
      />
    </Nav>
  )
}

export default NavBar