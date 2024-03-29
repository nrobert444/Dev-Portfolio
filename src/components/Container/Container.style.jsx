import styled from 'styled-components'

export const ContainerStyle = styled.div`
  max-width: 1280px;
  padding: 0 1.5rem;
  margin: auto;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 0;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  display: block;
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
`

export const BottomLine = styled.div`
  height: 2px;
  width: 3rem;
  background: #ffbc00;
  display: block;
  margin: 0 auto 1rem auto;
`
export const Lead = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`

export const FormattedSection = styled.section`
  text-align: center;
  padding: 2rem 0;

  @media (max-height: 330px) {
    padding: 0 auto;
  }
`
