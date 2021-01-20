import React from 'react';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon 
} from './styles';

const Navbar = () => {
  return (
    <>

      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Ultra
          </NavLogo>
         
        </NavbarContainer>
      </Nav>

    </>
  );
}

export default Navbar;
