import styled from 'styled-components'

export const AboutInfoStyles = styled.div`
  display: grid;
  grid-template-areas: 'bioimage bio';
  grid-gap: 1.2rem;

  .bio-image {
    grid-area: bioimage;
    align-items: center;
    justify-items: center;
    width: auto;
    height: 25rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  }

  .bio {
    grid-area: bio;
    padding: 0.8rem;
    font-size: 1 rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 900px) {
    grid-template-areas:
      'bioimage'
      'bio';
  }

  @media (max-width: 500px) {
    .bio-image {
      width: 100%;
      height: auto;
    }
  }
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
export const StyledImg = styled.img`
  width: 100%;
  height: 33vh;
`
