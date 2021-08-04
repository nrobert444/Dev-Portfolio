import React from 'react'
import { AboutInfoStyles, ButtonLink, StyledImg } from './AboutInfo.styles'
import { Container } from '../Container/Container'
import { BottomLine, SectionTitle, Lead } from '../Container/Container.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSalesforce, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade'

export const AboutInfo = () => {
  return (
    <div id='about'>
      <div className='py-1'>
        <Fade left>
          <StyledImg
            src='img/salesforce banner.png'
            alt='salesforce certificates'
          ></StyledImg>
        </Fade>
      </div>
      <section className='text-center'>
        <Container>
          <SectionTitle>About</SectionTitle>
          <BottomLine />
          <AboutInfoStyles>
            <Fade up>
              <img src='img/aboutimage.jpg' alt='' className='bio-image' />
            </Fade>
            <Fade right>
              <div className='bio bg-medium'>
                <Lead>
                  I am a 3x Salesforce Certified Advanced Administrator with a
                  passion for efficiency and solving complex business problems.
                  With over 8 years of experience optimizing business
                  performance in many industries, I have strong analytical
                  skills with an interest in understanding data and utilizing
                  information to make informed business decisions. In my free
                  time I enjoy learning all that I can about Salesforce and
                  related technologies to enchance my understanding and share
                  with the community at large. I am also a member of a
                  Salesforce Professional Development Program to learn
                  additional aspects of the Salesforce Ecosystem and network to
                  build valuable professional relationships. Outside of my
                  passion for Salesforce I enjoy spending time with my family,
                  experimenting with cooking, exercising, and indulging my
                  passion for cinema.
                  <br></br>
                  Check out the link below to see some of my Trailhead
                  achievements and Certifications!
                  <br></br>
                  <br></br>
                  <ButtonLink
                    href='https://trailblazer.me/id/nroberto2'
                    className='btn-dark'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      className='fab fa-lg'
                      icon={faSalesforce}
                    />
                    {'   '}
                    My Trailhead Profile
                  </ButtonLink>
                  <ButtonLink
                    href='https://www.linkedin.com/in/nicholas-salesforce/'
                    className='btn-dark'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon className='fab fa-lg' icon={faLinkedin} />
                    {'   '}
                    My LinkedIn Profile
                  </ButtonLink>
                </Lead>
              </div>
            </Fade>
          </AboutInfoStyles>
        </Container>
      </section>
    </div>
  )
}
