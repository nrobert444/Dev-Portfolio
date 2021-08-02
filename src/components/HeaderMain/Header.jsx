import React from 'react'
import {
  HeaderHome,
  NavContainer,
  NavItem,
  NavItemSpan,
  NavATag,
  StyledImg
} from './Header.styles'
import Typical from 'react-typical'
import { Lead } from '../Container/Container.style'
import { Container } from '../Container/Container'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <HeaderHome id='top'>
      <Container>
        <NavContainer>
          <NavItemSpan>
            {' '}
            <Link to='top' spy={true} smooth={true} duration={800}>
              Home
            </Link>
          </NavItemSpan>
          <NavItemSpan>
            {' '}
            <Link to='about' spy={true} smooth={true} duration={800}>
              About
            </Link>
          </NavItemSpan>
          <NavItemSpan>
            {' '}
            <Link to='work' spy={true} smooth={true} duration={800}>
              Work
            </Link>
          </NavItemSpan>
          <NavItem to='/contact'>Contact</NavItem>
          <NavATag
            href='NicholasRobertoSFResumePort.pdf'
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
                'Salesforce Advanced Administrator',
                2000,
                'Salesforce Platform Developer',
                2000,
                'Salesforce Administrator',
                2000
              ]}
            />
          </Lead>
        </div>
      </Container>
      <div>
        <StyledImg
          src='img/SalesforceCertificateLogo copy.png'
          alt='salesforce certificates'
        ></StyledImg>
      </div>
    </HeaderHome>
  )
}

export default Header
