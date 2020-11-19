import React from 'react'
import { HeaderHome, NavContainer, NavItem } from './Header.styles'
import Typical from 'react-typical'
import { Lead } from '../Container/Container.style'
import { Container } from '../Container/Container'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <HeaderHome id='top'>
      <Container>
        <NavContainer>
          <NavItem>
            {' '}
            <Link to='top' spy={true} smooth={true} duration={800}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            {' '}
            <Link to='about' spy={true} smooth={true} duration={800}>
              About
            </Link>
          </NavItem>
          <NavItem>
            {' '}
            <Link to='work' spy={true} smooth={true} duration={800}>
              Work
            </Link>
          </NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
        <div className='header-content'>
          <h1>Nick Roberto </h1>
          <Lead style={{ color: '#ffbc00' }}>
            {' '}
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'Software Developer',
                2000,
                'Technologist',
                2000,
                'Business Owner',
                2000,
                'Father',
                2000,
                'Husband',
                2000,
                'Film Fanatic',
                2000
              ]}
            />
          </Lead>
        </div>
      </Container>
    </HeaderHome>
  )
}

export default Header
