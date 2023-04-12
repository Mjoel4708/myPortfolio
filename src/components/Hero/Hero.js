import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm a seasoned full-stack developer with diverse experience in both technical and non-technical aspects of the field. I'm constantly seeking to push beyond the norm and thrive on innovative thinking. My passion for innovation and dynamic skill set makes me confident that I can add value to any team and drive success in your organisation.   <br />
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;