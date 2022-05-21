import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import GlobalData from '../../data/GlobalData'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
  background: ${({ hide }) =>
    hide ? 'transparent' : GlobalData.backgroundColor};
  /* margin-top: -80px; */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  /* position: fixed; */
  top: 0rem;
  z-index: 50;
  width: 100%;
  transition: 0.5s;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
`

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  z-index: 50;
  transition: 1s;
  margin-left: ${({ hide }) => (hide === 'true' ? `100%` : '0%')};
`

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 6rem;
`

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  width: 100%;
`
export const NavItem = styled.div`
  height: 80px;
  cursor: pointer;
  padding: 0rem 1rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`
export const NavItemLink = styled(NavLink)`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;

  &.active {
    text-shadow: 0 0 20px ${GlobalData.primaryColor},
      0 0 15px ${GlobalData.primaryColor}, 0 0 10px ${GlobalData.primaryColor};
    border-bottom: 4px solid ${GlobalData.primaryColor};
  }
`
