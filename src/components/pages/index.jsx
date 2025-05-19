import { Box } from '@mui/material';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';

const sx = {
  root: {
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
  }
}

const Pages = ({ }) => {

  return (
    <Box sx={sx.root}>
      <Introduction />
      <Experience />
      <Projects/>
    </Box>
  )
}

export default Pages