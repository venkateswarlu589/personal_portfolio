import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
     <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello World! 👋 I'm Venkatesh, a recent graduate with a degree in Computer Science. 
        </SectionText>
        <Button onClick={() => window.location = "https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSMVVvfjlKkQvpDLSBwlqFMQGwRjcVZGrCcZJZSDlzkBxjZfbGPnQBWSdCWnmKqGDDpFDfML"}>Learn More</Button>
      </LeftSection>

     </Section>
);

export default Hero;