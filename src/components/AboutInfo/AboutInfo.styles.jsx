import styled from 'styled-components'

export const AboutInfoStyles = styled.div`
  display: grid;
  grid-template-areas: 'bioimage bio bio';
  grid-gap: 1.2rem;

  .bio-image {
    grid-area: bioimage;
    height: 35rem;
    width: 28rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  }

  .bio {
    grid-area: bio;
    padding: 0.8rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 800px) {
    grid-template-areas:
      'bioimage'
      'bio';
  }
`
