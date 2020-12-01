import React from 'react'
import { HeaderHome, NavContainer, NavItem, NavATag } from './Header.styles'
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
          <NavATag
            href='NRSDresume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </NavATag>
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
                3000,
                'Frontend Specialist',
                3000,
                'Business Owner',
                3000
              ]}
            />
          </Lead>
        </div>
      </Container>
    </HeaderHome>
  )
}

export default Header
