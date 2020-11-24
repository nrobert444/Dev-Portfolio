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
              <img src='img/aboutimage.jpg' alt='' className='bio-image' />
            </Fade>
            <Fade right>
              <div className='bio bg-medium'>
                <Lead>
                  My name is Nicholas Roberto, i'm a full stack developer
                  specializing in front end UI/UX. I'm passionate about creating
                  solutions through software development that help bring a
                  little more simplicity to our otherwise complex world. The
                  core development stack I use is React, Node/Express, and
                  MongoDB though I have utilized a large number of additional
                  libraries/frameworks and tools. In my free time I love to
                  explore new technologies and find creative ways to implement
                  them in my work and supplement my growth as a developer. When
                  i'm not doing that you can find me hanging out with the
                  family, or indulging in my passion for cinema.
                </Lead>
              </div>
            </Fade>
          </AboutInfoStyles>
        </Container>
      </section>
    </div>
  )
}
