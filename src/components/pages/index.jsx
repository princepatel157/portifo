import { Box } from '@mui/material'
import React from 'react'
import Introduction from './Introduction';
import Experience from './Experience';

const sx = {
  root: {
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
  }
}

const Pages = ({ introRef, experienceRef }) => {

  return (
    <Box sx={sx.root}>
      <Introduction id="introduction" ref={introRef}/>
      <Experience id="introduction" ref={experienceRef}/>
    </Box>
  )
}

export default Pages