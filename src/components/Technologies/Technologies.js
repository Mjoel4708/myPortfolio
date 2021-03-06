import React from 'react';
import { DiFirebase, DiReact, DiAws } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with  <br />
            React.js <br />
            Angular <br />
            Vue js <br />
            Twig <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Maria DB <br />
            Mysql <br />
            Mongo DB <br />
            Nginx <br />
            Apache <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            AWS <br />
            Digital Ocean <br />
            Azure <br />
            Firebase <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
