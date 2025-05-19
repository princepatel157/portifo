import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Pages from './pages';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px 10%',
    minHeight: '100vh',
    display: 'flex',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1000px)': {
      margin: '0px 5%',
      flexDirection: 'column'
    },
  },
  content: {
    width: '60%',
    '@media (max-width: 1000px)': {
      width: '100%'
    },
  },
  cursorCircle: {
    position: 'fixed',
    top: -400,
    left: -400,
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    opacity: 0.25,
    zIndex: -1,
    background: "radial-gradient(50% 50% at 50% 50%, rgba(52, 99, 208, 0.56) 0%, rgba(31, 63, 138, 0) 100%)"
  },
}));

const Home = () => {
  const classes = useStyles();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box className={classes.root}>
      {/* The moving circle */}
      <Box
        className={classes.cursorCircle}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <Header/>
      <Box className={classes.content}>
        <Pages/>
      </Box>
    </Box>
  );
};

export default Home;
