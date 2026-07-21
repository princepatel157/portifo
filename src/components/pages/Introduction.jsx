import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { motion } from 'framer-motion';

const featureCards = [
  {
    icon: <CodeIcon style={{ fontSize: 24 }} />,
    color: '#A855F7',
    bgColor: 'rgba(168, 85, 247, 0.12)',
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code',
  },
  {
    icon: <SpeedIcon style={{ fontSize: 24 }} />,
    color: '#38BDF8',
    bgColor: 'rgba(56, 189, 248, 0.12)',
    title: 'Performance',
    description: 'Building fast and optimized applications',
  },
  {
    icon: <GroupIcon style={{ fontSize: 24 }} />,
    color: '#2DD4BF',
    bgColor: 'rgba(45, 212, 191, 0.12)',
    title: 'Team Player',
    description: 'Collaborating and mentoring others',
  },
  {
    icon: <EmojiObjectsIcon style={{ fontSize: 24 }} />,
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    title: 'Problem Solver',
    description: 'Turning complex problems into simple solutions',
  },
];

const Introduction = () => {
  return (
    <Box
      id="about"
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 4, md: 6 } }}
    >
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {/* Left Side Header */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.8,
              py: 0.6,
              borderRadius: '20px',
              background: 'rgba(129, 140, 248, 0.1)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              color: '#818CF8',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            <PersonOutlineIcon style={{ fontSize: 14 }} />
            ABOUT ME
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.65rem' },
              lineHeight: 1.25,
              color: '#F8FAFC',
              letterSpacing: '-0.5px',
            }}
          >
            Full-Stack Developer who loves building impactful{' '}
            <span className="gradient-text-cyan-blue">products.</span>
          </Typography>
        </Grid>

        {/* Right Side Bio Description */}
        <Grid item xs={12} md={6} sx={{ pt: { md: '64px !important' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Typography
              sx={{
                color: '#94A3B8',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.75,
                letterSpacing: '0.2px',
              }}
            >
              I’m a full-stack developer with 2+ years of experience working with{' '}
              <strong style={{ color: '#F8FAFC' }}>JavaScript, React.js, Node.js, and TypeScript</strong>.
              I’m skilled in building scalable web applications, RESTful APIs, and using tools like Docker, AWS EC2, Git, and MongoDB.
            </Typography>

            <Typography
              sx={{
                color: '#94A3B8',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.75,
                letterSpacing: '0.2px',
              }}
            >
              Currently, I’m working as a{' '}
              <span style={{ color: '#F8FAFC', fontWeight: 600 }}>
                Software Development Engineer I at Languify Pvt. Ltd.
              </span>
              , where I contribute to large-scale education platforms (including Cambridge University SEP) that process over{' '}
              <strong style={{ color: '#38BDF8' }}>10,000 assessments daily</strong>.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Feature Cards Grid Row */}
      <Grid container spacing={2.5}>
        {featureCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Box
              component={motion.div}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card"
              sx={{
                p: 2.5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(15, 23, 42, 0.6)',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: card.bgColor,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  boxShadow: `0 4px 14px ${card.bgColor}`,
                }}
              >
                {card.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#F8FAFC',
                  mb: 0.8,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  color: '#94A3B8',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Introduction;