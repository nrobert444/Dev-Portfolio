import React from 'react'
import {
  ItemsContainer,
  Item,
  ItemImage,
  ItemText,
  ItemTextWrap,
  FormatP
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
    <div>
      <section className='text-center py-3'>
        <Container>
          <SectionTitle>My Work</SectionTitle>
          <BottomLine />
          <Lead>Check out some of my projects</Lead>
          <ItemsContainer>
            <Item>
              <Fade left>
                <ItemImage>
                  <img src='img/about-pic.jpg' alt='' />
                </ItemImage>
              </Fade>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Full-Stack App</p>
                  <h2 className='item-text-title'>Moonrise Ecommerce Store</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Fade right>
              <FormatP>
                Ecommerce platform built with React using Hooks, MongoDb,
                Node/Express and dependencies such as react helmet.
              </FormatP>
            </Fade>
            <Item>
              <ItemImage>
                <img src='img/herobridge2.jpg' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Full-Stack App</p>
                  <h2 className='item-text-title'>Moonrise Ecommerce Store</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Fade right>
              <FormatP>
                Ecommerce platform built with React using Hooks, MongoDb,
                Node/Express and dependencies such as react helmet.
              </FormatP>
            </Fade>
            <Item>
              <ItemImage>
                <img src='img/herobridge2.jpg' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Full-Stack App</p>
                  <h2 className='item-text-title'>Moonrise Ecommerce Store</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Fade right>
              <FormatP>
                Ecommerce platform built with React using Hooks, MongoDb,
                Node/Express and dependencies such as react helmet.
                <a href='/work' className='btn-light'>
                  Github
                </a>
                <a href='/work' className='btn-light'>
                  Live Site
                </a>
              </FormatP>
            </Fade>
          </ItemsContainer>
        </Container>
      </section>
    </div>
  )
}
