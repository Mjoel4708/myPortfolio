import React from 'react';
import { DiFirebase, DiReact, DiAws, DiGit, DiPhp, DiDatabase, DiDigitalOcean } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My technical skills include proficiency in several programming languages, frameworks, and tools. I have experience with the following:
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
            React Js <br />
            Angular Js<br />
            Vue Js <br />
            Twig <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Laravel <br />
            Symfony <br />
            Codeigniter <br />
            Node Js <br />
            Wordpress <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Devops tools</ListTitle>
          <ListParagraph>
            Docker <br />
            Gitlab <br />
            Github <br />
            Bitbucket <br />
            Nginx <br />
            Apache <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Maria DB <br />
            Mysql <br />
            Mongo DB <br />
            Postgres <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>API developement</ListTitle>
          <ListParagraph>
            Rest API <br />
            GraphQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDigitalOcean size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud hosting</ListTitle>
          <ListParagraph>
            AWS <br />
            Digital Ocean <br />
            Azure <br />
            Google Cloud <br />
            Firebase <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
