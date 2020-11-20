import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
  MainFooter,
  FooterContent,
  StyledLink,
  StyledRouteLink
} from './Footer.styles'
import { faEnvelope, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <MainFooter>
      <div className='container'></div>
      <FooterContent className='container'>
        <p>Copyright &copy; 2020 All Rights Reserved</p>
        <Link to='top' spy={true} smooth={true} duration={800}>
          <FontAwesomeIcon icon={faChevronUp} style={{ cursor: 'pointer' }} />
        </Link>
        <div className='social'>
          <StyledLink href='https://twitter.com/Nichola55137683'>
            <FontAwesomeIcon className='fab' icon={faTwitter} />
          </StyledLink>
          <StyledLink href='https://www.linkedin.com/in/nicholas-roberto/'>
            <FontAwesomeIcon className='fab' icon={faLinkedin} />
          </StyledLink>
          <StyledLink href='https://github.com/nrobert444'>
            <FontAwesomeIcon className='fab' icon={faGithub} />
          </StyledLink>
          <StyledRouteLink to='/contact'>
            <FontAwesomeIcon className='fab' icon={faEnvelope} />
          </StyledRouteLink>
        </div>
      </FooterContent>
    </MainFooter>
  )
}
