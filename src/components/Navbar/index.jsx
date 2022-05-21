import React from 'react'
import NavbarData from '../../data/NavbarData'
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavItemLink,
  NavLogo,
  NavMenu,
} from './style'
import resources from '../../data/resources'
import GlobalData from '../../data/GlobalData'

const Navbar = ({ isFixed, hide }) => {
  return (
    <Nav isFixed={isFixed} hide={hide}>
      <NavbarContainer>
        <NavLogo hide={hide.toString()} to={'/'}>
          <NavIcon src={resources.logo} alt="logo" />
          {/* {GlobalData.websiteName} */}
        </NavLogo>

        {!hide && (
          <>
            <NavMenu>
              {NavbarData.map((e, i) => (
                <NavItem key={i}>
                  <NavItemLink
                    exact={e.exact}
                    to={e.to}
                    activeclassname={e.activeclassname}
                  >
                    {e.text}
                  </NavItemLink>
                </NavItem>
              ))}
            </NavMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
