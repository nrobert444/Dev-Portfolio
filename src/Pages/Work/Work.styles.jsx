import styled from 'styled-components'

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
  background: lightgray;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Item = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 1rem 2rem 2rem 2rem;

  &::first-child {
    margin: 1rem 2rem 5rem 2rem;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    background: #ffbc00;
    opacity: 0.9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
    transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);
  }
  &:hover:after {
    transform: scale(2) translateX(0) translateY(0) rotate(-28deg);
  }
`

export const ItemImage = styled.div`
  height: auto;
  transform: translateZ(0);
  display: block;
  border: 2px solid black;
  transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);

  &:before {
    content: '';
    display: block;
    padding-top: 75%;
    overflow: hidden;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 0;
  }
`

export const ItemText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  transform: translateY(-20%);
  transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
    transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
  transition-delay: 300ms;

  //Bring in text on hover
  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`
export const NoStyleA = styled.a`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
export const ItemTextWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  & .item-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0 0 0;
  }

  & .item-text-category {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    margin: 0;
  }
`
export const FormatP = styled.h4`
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 1rem;
`
export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  width: auto;
  margin: 1rem 5rem 1rem 5rem;

  @media (max-width: 500px) {
    & a {
      display: flex;
      justify-content: center;
      width: auto;
      margin-top: 1rem;
    }
  }
  @media (max-width: 800px) {
    & a {
      display: flex;
      justify-content: center;
      margin-left: 5rem;
      margin-right: 5rem;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 1600px) {
    & a {
      margin-top: 2rem;
    }
    &:hover {
      color: #ffbc00;
    }
  }
`
