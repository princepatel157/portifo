import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          color: '#94A3B8',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        © 2024 Prince Patel. All rights reserved.
      </Typography>

      <Typography
        sx={{
          color: '#64748B',
          fontSize: '0.75rem',
        }}
      >
        Designed & Built with React, Material UI & Framer Motion
      </Typography>
    </Box>
  );
};

export default Footer;
