import React from 'react'
import { AboutTechStyles, TitleContainer } from './TechSkillContainer.styles'

export const TechSkillContainer = () => {
  return (
    <div>
      <TitleContainer>React</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>
              Redux | Context API | Hooks | Class/Functional Components
            </strong>
          </p>
        </div>
      </AboutTechStyles>
      <TitleContainer>JavaScript</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>OOP | Functional Programming | ES5 | ES6 + </strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <TitleContainer>HTML</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>HTML5 Semantic HTML</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <TitleContainer>CSS</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>SASS | CSS/Grid | FlexBox</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <TitleContainer>Node/Express</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>Routing | MiddleWare | REST | Auth</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <TitleContainer>MongoDb / Mongoose</TitleContainer>
      <AboutTechStyles>
        <div>
          <p>
            <strong>
              Querying | Auth | Virtuals | Schemas | Atlas/Compass
            </strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
    </div>
  )
}
