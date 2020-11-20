import React from 'react'
import { NavContainer, NavItem } from '../HeaderSub/HeaderSub.styles'
import { HeaderInner } from './HeaderSub.styles'
import { Container } from '../Container/Container'

const HeaderSub = () => {
  return (
    <HeaderInner>
      <Container>
        <NavContainer>
          <NavItem to='/'>Go Back</NavItem>
        </NavContainer>{' '}
      </Container>
    </HeaderInner>
  )
}

export default HeaderSub
