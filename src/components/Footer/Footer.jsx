import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

import { MainFooter, FooterContent, StyledLink } from './Footer.styles'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
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
          <StyledLink href='https://trailblazer.me/id/nroberto2'>
            <FontAwesomeIcon className='fab' icon={faMountain} />
          </StyledLink>
        </div>
      </FooterContent>
    </MainFooter>
  )
}
