import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 500, text: 'DSA Problems Solved on various coding websites ', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key = {index}>
          <BoxNum>{card.number}+ </BoxNum>
          <BoxText>{card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
