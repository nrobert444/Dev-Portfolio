import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderInner = styled.header`
  background: #333333;
  height: 5.5rem;
  color: #fff;
  border-bottom: 2px solid #ffbc00;

  @media (max-width: 500px) {
    color: #fff;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`

export const NavItem = styled(Link)`
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s;
  &:hover {
    border-color: #ffbc00;
  }

  /* @media (max-width: 800px) {
    color: #000;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  } */
`
