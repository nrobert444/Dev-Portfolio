import React from 'react'
import { AboutInfoStyles } from './AboutInfo.styles'
import { Container } from '../Container/Container'
import { BottomLine, SectionTitle, Lead } from '../Container/Container.style'
import Fade from 'react-reveal/Fade'

export const AboutInfo = () => {
  return (
    <div id='about'>
      <section className='text-center py-2 bg-light'>
        <Container>
          <SectionTitle>About</SectionTitle>
          <BottomLine />
          <AboutInfoStyles>
            <Fade up>
              <img src='img/about-pic.jpg' alt='' className='bio-image' />
            </Fade>
            <Fade right>
              <div className='bio bg-medium'>
                <Lead>
                  My name is Nicholas Roberto, i'm a full stack JavaScript
                  developer with a specialty in front end UI/UX. I specialize in
                  the 'MERN' stack but have utilized multiple frameworks,
                  libraries and languages to supplement my development. I have a
                  background in entrepreneurship and freelancing that has helped
                  me to quickly aquire the skills needed to be proficient in a
                  short period of time. I have a passion for fitness, films,
                  craft beer and being being a father and husband.
                </Lead>
              </div>
            </Fade>
          </AboutInfoStyles>
        </Container>
      </section>
    </div>
  )
}
