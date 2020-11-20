import styled from 'styled-components'

export const AboutInfoStyles = styled.div`
  display: grid;
  grid-template-areas: 'bioimage bio bio';
  grid-gap: 1.2rem;

  .bio-image {
    grid-area: bioimage;
    height: 400px;
    width: 28rem;
    border-right: 3px solid #ffbc00;
  }

  .bio {
    grid-area: bio;
    border-left: 3px solid #ffbc00;
    padding: 0.8rem;
  }

  @media (max-width: 800px) {
    grid-template-areas:
      'bioimage'
      'bio';
  }
`
