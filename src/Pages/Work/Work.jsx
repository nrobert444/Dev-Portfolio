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
                <h2 style={{ marginTop: '1rem' }}>
                  Moorise Media Eccomerce App
                </h2>
                <FormatP>
                  MongoDb | React | Redux | Node | Express
                  <div>
                    Full Stack Ecommerce platform built to supplement Moonrise
                    Media LLC's online presence. This app integrates paypal's
                    API, Authentication, and admin functionality for performing
                    CRUD operations on users, products and orders on the front
                    end.
                  </div>
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
                      Earth Force Disaster Tracker
                    </h2>
                  </ItemTextWrap>
                </ItemText>
              </Item>
            </NoStyleA>
            <Fade right>
              <div>
                <h2 style={{ marginTop: '1rem' }}>
                  Earth Force Disaster Tracker App
                </h2>
                <FormatP>
                  React | Node | Express | SQL
                  <div>
                    Earth-Force Natural Events Tracker allows you to find
                    current and historical natural weather related events, track
                    and save those events, and connect with resources that help
                    with disaster relief. This app was built in a 4-day sprint
                    with a team of 6 and utilizes NASA's EONET API and Google
                    maps.
                  </div>
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
          </ItemsContainer>
        </Container>
      </section>
    </div>
  )
}
