import React from 'react';
import { Box } from '@mui/material';
import Introduction from './Introduction';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Pages = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'stretch' }}>
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Pages;