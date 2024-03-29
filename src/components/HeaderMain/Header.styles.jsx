import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderHome = styled.header`
  background: url('../img/ian-dooley-DJ7bWa-Gwks-unsplash.jpg') no-repeat center
    right/cover;
  height: 100vh;
  color: #fff;

  & .header-content {
    text-align: center;
    padding-top: 20%;
    & h1 {
      font-size: 5rem;
      line-height: 1.2;
    }
  }

  @media (max-width: 800px) {
    & .header-content {
      padding-top: 5rem;
    }
  }

  @media (max-width: 500px) {
    border-bottom: 3px solid #ffbc00;
    background-position: 20% 30%;

    & .header-content {
      padding-top: 5rem;
    }
  }

  @media (max-height: 580px) {
    & .header-content {
      padding-top: 3rem;
    }
  }

  @media (max-height: 330px) {
    & .header-content {
      & h1 {
        font-size: 2rem;
      }
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const NavItemSpan = styled.span`
  padding: 1rem 1.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s;
  &:hover {
    border-color: #ffbc00;
  }

  @media (max-width: 800px) {
    color: #000;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }
`
export const NavItem = styled(Link)`
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s;
  &:hover {
    border-color: #ffbc00;
  }

  @media (max-width: 800px) {
    color: #000;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }
`
export const NavATag = styled.a`
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s;
  &:hover {
    border-color: #ffbc00;
  }

  @media (max-width: 800px) {
    color: #000;
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }
`
