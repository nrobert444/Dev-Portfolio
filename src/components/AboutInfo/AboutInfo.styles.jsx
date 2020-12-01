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
    height: 35rem;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4);
  }

  .bio {
    grid-area: bio;
    padding: 0.8rem;
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
