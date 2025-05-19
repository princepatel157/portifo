import { Box, Typography } from '@mui/material'
import React from 'react'

const sx={
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '100px'
  },
  text: {
    color: '#94A3B8',
    lineHeight: '170%',
    letterSpacing: '0.5px',
    fontSize: '15px',
    '@media (max-width: 600px)': {
      fontSize: '12px'
    }
  }
}

const Introduction = ({...props}) => {
  return (
    <Box sx={sx.root} {...props}>
      <Typography sx={sx.text}>
        I’m a full-stack developer with 2+ years of experience working with JavaScript, React.js, Node.js, and TypeScript. I’m skilled in building scalable web applications, RESTful APIs, and using tools like Docker, AWS EC2, Git, and MongoDB.
      </Typography>
      <Typography sx={sx.text}>
        Currently, I’m working as a <span style={{ color: '#E2E8F0'}}>Software Development Engineer I at Languify Pvt. Ltd.</span>, where I contribute to large-scale education platforms, including a project for Cambridge University that processes over 10,000 assessments daily. I focus on backend and frontend development, code quality, and team collaboration.
      </Typography>
      <Typography sx={sx.text}>
        Previously, I worked as a <span style={{ color: '#E2E8F0'}}>freelance MERN developer</span>, where I built and deployed projects like&nbsp;
        <a href='https://nanadairyfarming.in/' style={{ color: '#E2E8F0', textDecoration: 'underline'}}>Nana Dairy Farming</a>,&nbsp;
        <a href='https://www.ashihelmet.com'  style={{ color: '#E2E8F0', textDecoration: 'underline'}}>Ashi Helmet Store</a>, and&nbsp;
        <a href='https://tenantnetwork.in/' style={{ color: '#E2E8F0', textDecoration: 'underline'}}>Tenant Network</a>. These included backend systems, payment gateway integration, WhatsApp OTP verification, and full product deployments on VPS servers.
      </Typography>
      <Typography sx={sx.text}>
        During my internship at Jungleworks, I worked on live Node.js projects, contributing to systems like coupon management, email automation, and commission handling.
      </Typography>
    </Box>
  )
}

export default Introduction