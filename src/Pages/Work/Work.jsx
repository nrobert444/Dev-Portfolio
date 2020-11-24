import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ItemsContainer,
  Item,
  ItemImage,
  ItemText,
  ItemTextWrap,
  FormatP,
  NoStyleA,
  ButtonLink
} from './Work.styles'
import { Container } from '../../components/Container/Container'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'
import Fade from 'react-reveal/Fade'

export const Work = () => {
  return (
    <div id='work'>
      <section className='text-center py-3'>
        <Container>
          <SectionTitle>My Work</SectionTitle>
          <BottomLine />
          <Lead>Check out some of my projects</Lead>
          <ItemsContainer>
            <NoStyleA href='https://moonrisemediastoreapp.herokuapp.com'>
              <Item>
                <Fade left>
                  <ItemImage>
                    <img src='img/moonrisestore2.png' alt='' />
                  </ItemImage>
                </Fade>
                <ItemText>
                  <ItemTextWrap>
                    <p className='item-text-category'>Full-Stack App</p>
                    <h2 className='item-text-title'>
                      Moonrise Ecommerce Store
                    </h2>
                  </ItemTextWrap>
                </ItemText>
              </Item>
            </NoStyleA>
            <Fade right>
              <div>
                <FormatP>
                  Ecommerce platform built with React using Hooks, MongoDb,
                  Node/Express and dependencies such as react helmet.
                </FormatP>
                <ButtonLink
                  href='https://github.com/nrobert444/Moonrise-Media-Store'
                  className='btn-dark'
                >
                  <FontAwesomeIcon className='fab fa-lg' icon={faGithub} />{' '}
                  Github
                </ButtonLink>{' '}
                <ButtonLink
                  href='https://moonrisemediastoreapp.herokuapp.com'
                  className='btn-dark'
                >
                  Live Site
                </ButtonLink>
              </div>
            </Fade>

            <NoStyleA href='https://earth-force.herokuapp.com'>
              <Item>
                <Fade left>
                  <ItemImage>
                    <img src='img/earthforce.png' alt='' />
                  </ItemImage>
                </Fade>
                <ItemText>
                  <ItemTextWrap>
                    <p className='item-text-category'>Full-Stack App</p>
                    <h2 className='item-text-title'>
                      Earth Force Disaster Awareness App
                    </h2>
                  </ItemTextWrap>
                </ItemText>
              </Item>
            </NoStyleA>
            <Fade right>
              <div>
                <FormatP>
                  Ecommerce platform built with React using Hooks, MongoDb,
                  Node/Express and dependencies such as react helmet.
                </FormatP>
                <ButtonLink
                  href='https://github.com/smart-invester'
                  className='btn-dark'
                >
                  <FontAwesomeIcon className='fab fa-lg' icon={faGithub} />{' '}
                  Github
                </ButtonLink>{' '}
                <ButtonLink
                  href='https://earth-force.herokuapp.com'
                  className='btn-dark'
                >
                  Live Site
                </ButtonLink>
              </div>
            </Fade>
            <NoStyleA href='https://moonrisemediastoreapp.herokuapp.com'>
              <Item>
                <Fade left>
                  <ItemImage>
                    <img src='img/moonriseStore.png' alt='' />
                  </ItemImage>
                </Fade>
                <ItemText>
                  <ItemTextWrap>
                    <p className='item-text-category'>Full-Stack App</p>
                    <h2 className='item-text-title'>
                      Earth Force Disaster Tracker
                    </h2>
                  </ItemTextWrap>
                </ItemText>
              </Item>
            </NoStyleA>
            <Fade right>
              <div>
                <FormatP>
                  Ecommerce platform built with React using Hooks, MongoDb,
                  Node/Express and dependencies such as react helmet.
                </FormatP>
                <ButtonLink
                  href='https://github.com/nrobert444/Moonrise-Media-Store'
                  className='btn-dark'
                >
                  <FontAwesomeIcon className='fab fa-lg' icon={faGithub} />{' '}
                  Github
                </ButtonLink>{' '}
                <ButtonLink
                  href='https://moonrisemediastoreapp.herokuapp.com'
                  className='btn-dark'
                >
                  Live Site
                </ButtonLink>
              </div>
            </Fade>
          </ItemsContainer>
        </Container>
      </section>
    </div>
  )
}
