import React from 'react'
import { TechGrid, Buffer, DivideLine } from './AboutTech.styles'
import { Container } from '../Container/Container'
import { TechLogoContainer } from '../TechLogoContainer/TechLogoContainer'
import { TechSkillContainer } from '../TechSkillContainer/TechSkillContainer'
import { BottomLine, SectionTitle } from '../Container/Container.style'
import Fade from 'react-reveal/Fade'

export const AboutTech = () => {
  return (
    <>
      <Container>
        <SectionTitle>Technologies</SectionTitle>
        <BottomLine />
      </Container>
      <TechGrid className='bg-dark py-3'>
        <Fade left>
          <TechSkillContainer />
        </Fade>
        <DivideLine />
        <Fade right>
          <TechLogoContainer />
        </Fade>
      </TechGrid>
      {/* <Buffer /> */}
    </>
  )
}
