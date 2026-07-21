import React from 'react';
import { Box, Typography } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import { motion } from 'framer-motion';

const skillsList = [
  {
    name: 'JavaScript',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#F7DF1E" />
        <path d="M19.5 24.5C20.6 24.5 21.6 23.9 22.2 23C22.6 22.3 22.7 21.4 22.7 19.5H25C25 22.2 24 23.8 22.8 24.9C21.4 26.2 19.4 26.5 17.5 25.7C16.4 25.2 15.6 24.2 15.2 23.1L17.2 22C17.5 22.8 18.2 23.4 19.5 24.5ZM11.5 24.5C12.6 24.5 13.5 23.9 13.9 22.8L16 23.9C15 25.8 13.2 26.5 11.2 26.5C8.8 26.5 7 24.9 7 22.2C7 19.4 8.7 18.2 11.5 17.5C13.2 17 14.1 16.6 14.1 15.7C14.1 14.9 13.3 14.3 12.1 14.3C10.8 14.3 10 15 9.6 16.1L7.6 15C8.4 13.2 10 12.3 12.2 12.3C14.7 12.3 16.4 13.7 16.4 15.9C16.4 18.7 14.6 19.7 12.1 20.3C10.7 20.6 9.8 21.1 9.8 22.1C9.8 23.3 10.7 24.5 11.5 24.5Z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#3178C6" />
        <path d="M19.8 15.3H23.5V17.5H21.7V25H19.2V17.5H17.5V15.3H19.8ZM12.7 25C10.5 25 9.1 23.8 8.8 21.8H11.2C11.4 22.6 12 23.1 12.9 23.1C13.8 23.1 14.3 22.6 14.3 22C14.3 20.7 10.8 21 10.8 17.9C10.8 16.3 12.2 15 14.3 15C16.2 15 17.6 16.1 17.8 18.1H15.4C15.2 17.4 14.7 17 14 17C13.2 17 12.7 17.4 12.7 18C12.7 19.3 16.2 18.8 16.2 22C16.2 23.7 14.8 25 12.7 25Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 16 16)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#000000" />
        <path d="M22.5 22.5L14.5 12.5V22.5H12.5V9.5H14.5L20.5 17.5V9.5H22.5V22.5Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1A1C24" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 16 16)" />
        <rect x="12" y="9" width="8" height="14" rx="2" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L26.4 10V22L16 28L5.6 22V10L16 4Z" stroke="#68A063" strokeWidth="2" strokeLinejoin="round" fill="rgba(104, 160, 99, 0.15)" />
        <path d="M16 12V20M12 14L16 12L20 14M12 18L16 20L20 18" stroke="#68A063" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1F2937" />
        <text x="16" y="21" fontSize="10" fontWeight="800" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.5">EX</text>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M15.2 3.5C15.2 3.5 15.7 3 16 3C16.3 3 16.8 3.5 16.8 3.5C19.5 8.2 24 13.5 24 18.5C24 23.2 20.4 27 16 27C11.6 27 8 23.2 8 18.5C8 13.5 12.5 8.2 15.2 3.5Z" fill="#13AA52" />
        <path d="M16 3V27" stroke="#47A248" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4Z" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="2" />
        <path d="M12 12C12 12 14 10 17 10C20 10 21 12 21 14C21 17 18 18 16 18C14 18 13 20 13 22" stroke="#336791" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="24" r="1" fill="#336791" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10L16 16L4 10L16 4Z" fill="#D82C20" />
        <path d="M4 14L16 20L28 14M4 19L16 25L28 19" stroke="#D82C20" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Socket.io',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#010101" />
        <path d="M9 16C9 12.1 12.1 9 16 9C19.9 9 23 12.1 23 16C23 19.9 19.9 23 16 23C12.1 23 9 19.9 9 16Z" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M16 11V16H21" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Zustand',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#4B3A2F" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="16" y="20" fontSize="9" fontWeight="800" fill="#F8FAFC" textAnchor="middle">🐻 zustand</text>
      </svg>
    ),
  },
  {
    name: 'Material UI',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8L16 1V9L8 14V22L4 20V8Z" fill="#0081CB" />
        <path d="M16 1L28 8V20L24 22V14L16 9V1Z" fill="#00B0FF" />
        <path d="M16 17L24 12.5V20.5L16 25V17Z" fill="#0081CB" />
        <path d="M16 17L8 12.5V20.5L16 25V17Z" fill="#00B0FF" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 12C20 12 21.5 14 23 16C20 16 18.5 15.2 16 16C13.5 16.8 12.5 19 9 19C13 19 14.5 17 16 16C19 16 20.5 16.8 23 16M9 13C13 13 14.5 11 16 10C19 10 20.5 10.8 23 10C20 10 18.5 9.2 16 10C13.5 10.8 12.5 13 9 13Z" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#1C1C1C" />
        <path d="M16.5 6L8 16.5H15L14.5 26L23 15.5H16L16.5 6Z" fill="#3ECF8E" />
      </svg>
    ),
  },
  {
    name: 'NATS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#2467C0" fillOpacity="0.15" stroke="#2467C0" strokeWidth="1.5" />
        <path d="M9 16C9 12.1 12.1 9 16 9C19.9 9 23 12.1 23 16" stroke="#2467C0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 21L16 17L20 21" stroke="#2467C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M28 17.5C27 15.8 25 15 23.5 15.5C22.8 13.8 21 12.5 19 12.8C18.8 10 16.5 8 14 8C11.5 8 9.2 10 9 12.8C7.5 13.2 6.2 14.5 6 16C4 16.5 2.5 18.2 2.5 20.5C2.5 23.5 5 26 8 26H24C26.8 26 29 23.8 29 21C29 19.5 28.5 18.3 28 17.5Z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'TurboRepo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#09090B" />
        <path d="M6 16L13.5 8.5L21 16L13.5 23.5L6 16Z" stroke="#FF007A" strokeWidth="1.5" fill="rgba(255, 0, 122, 0.15)" />
        <path d="M12.5 16L17.5 11L22.5 16L17.5 21L12.5 16Z" stroke="#00DF89" strokeWidth="1.5" fill="rgba(0, 223, 137, 0.15)" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#000000" />
        <path d="M16 8L25 24H7L16 8Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M28.3 14.7L17.3 3.7C16.4 2.8 14.9 2.8 14 3.7L3.7 14C2.8 14.9 2.8 16.4 3.7 17.3L14.7 28.3C15.6 29.2 17.1 29.2 18 28.3L28.3 18C29.2 17.1 29.2 15.6 28.3 14.7Z" fill="#F05032" />
        <circle cx="12" cy="16" r="2.5" fill="#FFFFFF" />
        <circle cx="20" cy="12" r="2.5" fill="#FFFFFF" />
        <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
        <path d="M12 16H20M20 12V20" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 6 } }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 1.8,
          py: 0.6,
          borderRadius: '20px',
          background: 'rgba(168, 85, 247, 0.1)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          color: '#A855F7',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          mb: 4,
        }}
      >
        <MemoryIcon style={{ fontSize: 14 }} />
        TECH STACK
      </Box>

      {/* Grid of Skill Cards using CSS Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' },
          gap: { xs: 1.5, sm: 2 },
        }}
      >
        {skillsList.map((skill) => (
          <Box
            key={skill.name}
            component={motion.div}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass-card"
            sx={{
              p: 2.5,
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              textAlign: 'center',
              background: 'rgba(15, 23, 42, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              '&:hover': {
                borderColor: 'rgba(56, 189, 248, 0.4)',
                boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.2)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
              }}
            >
              {skill.icon}
            </Box>

            <Typography
              sx={{
                color: '#F8FAFC',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
