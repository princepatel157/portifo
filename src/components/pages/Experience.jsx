import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Development Engineer I',
    organization: 'Underpin Technology FZ-LLC',
    time: 'Nov 2025 – Present',
    current: true,
    avatar: 'U',
    logo: '/underpin_services_logo.jpeg',
    avatarBg: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',
    description:
      'Worked on real-time socket-based communication for live game sessions and designed a secure ledger system to track transactions and maintain user wallets. Implemented CloudFront resource caching to reduce bandwidth usage, and optimized sportsbook API integration by reducing token consumption from 180 to 30 tokens per request to lower operational costs.',
    skills: ['TypeScript', 'Node.js', 'Redis', 'Socket.io', 'PostgreSQL', 'NATs'],
  },
  {
    title: 'Software Development Engineer I',
    organization: 'Languify Pvt. Ltd.',
    time: 'Aug 2023 – Aug 2025',
    current: false,
    avatar: 'L',
    logo: '/languify_in_logo.jpeg',
    avatarBg: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    description:
      'Developed the Spoken English Proficiency (SEP) system for Cambridge University, processing 10,000+ daily assessments. Practiced Test-Driven Development (TDD) to deliver reliable code, implemented Redis caching to optimize user-specific API performance, and integrated OpenAI models to enhance personalized learning content.',
    skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'OpenAI APIs', 'Material UI'],
  },
  {
    title: 'Freelance MERN Developer',
    organization: 'Remote',
    time: 'Sept 2022 – July 2023',
    current: false,
    avatarIcon: <Briefcase size={20} />,
    avatarBg: 'rgba(99, 102, 241, 0.15)',
    description:
      'Designed and deployed backend systems for various industries, successfully shipping Nana Dairy Farming, Ashi Helmet Store, and Tenant Network. Developed features like Razorpay, email authentication, WhatsApp verification, and analytics while optimizing performance following TDD and SOLID principles.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Tailwind', 'CI/CD'],
  },
  {
    title: 'Node Backend Developer (Intern)',
    organization: 'Jungleworks Pvt. Ltd.',
    time: 'Jan 2022 – Aug 2022',
    current: false,
    avatarIcon: <Briefcase size={20} />,
    logo: '/jungleworks_logo.jpeg',
    avatarBg: 'rgba(45, 212, 191, 0.15)',
    description:
      'Acquired backend expertise in Node.js, Express, and MySQL while working on live features including coupon schemes, commission engines, and automated email triggers. Managed monthly sprints for Rappo to ensure timely delivery of product tasks.',
    skills: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'Git', 'Linux'],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1.8,
            py: 0.6,
            borderRadius: '20px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#38BDF8',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          <Briefcase size={14} />
          EXPERIENCE
        </Box>

        <Box
          component="a"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: '#38BDF8',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'gap 0.2s ease',
            '&:hover': {
              gap: 1.5,
              color: '#60A5FA',
            },
          }}
        >
          View All Experience <ArrowRight size={16} />
        </Box>
      </Box>

      {/* Timeline Wrapper */}
      <Box sx={{ position: 'relative', pl: { xs: 2, sm: 3 } }}>
        {/* Vertical Line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 7, sm: 11 },
            top: 12,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.6) 0%, rgba(99, 102, 241, 0.2) 100%)',
          }}
        />

        {/* Timeline Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              component={motion.div}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1.5, md: 3 },
                alignItems: { xs: 'flex-start', md: 'flex-start' },
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -14, sm: -18 },
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: exp.current ? '#38BDF8' : '#818CF8',
                  boxShadow: exp.current ? '0 0 12px #38BDF8' : 'none',
                  border: '2px solid #070A12',
                  zIndex: 2,
                }}
              />

              {/* Date Badge Left Column */}
              <Box sx={{ minWidth: { md: 160 }, pt: 0.5 }}>
                <Typography
                  sx={{
                    color: exp.current ? '#38BDF8' : '#94A3B8',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  {exp.time}
                </Typography>
              </Box>

              {/* Main Experience Card */}
              <Box
                className="glass-card"
                sx={{
                  flex: 1,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: '16px',
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 3 },
                  alignItems: 'flex-start',
                }}
              >
                {/* Logo Container on the left inside the card */}
                <Box
                  sx={{
                    width: { xs: 48, sm: 64, md: 72 },
                    height: { xs: 48, sm: 64, md: 72 },
                    borderRadius: '50%',
                    background: exp.avatarBg,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  {exp.logo ? (
                    <Box
                      component="img"
                      src={exp.logo}
                      alt={exp.organization}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : exp.avatar ? (
                    exp.avatar
                  ) : (
                    exp.avatarIcon
                  )}
                </Box>

                {/* Details Container on the right */}
                <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.05rem', sm: '1.15rem' },
                        color: '#F8FAFC',
                      }}
                    >
                      {exp.title} <span style={{ color: '#94A3B8', fontWeight: 400 }}>– {exp.organization}</span>
                    </Typography>

                    {/* Current Pill Badge */}
                    {exp.current && (
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1.5,
                          py: 0.4,
                          borderRadius: '20px',
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          color: '#10B981',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        <CheckCircle2 size={12} />
                        Current
                      </Box>
                    )}
                  </Box>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: '#94A3B8',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      mb: 2.5,
                    }}
                  >
                    {exp.description}
                  </Typography>

                  {/* Skill Chips */}
                  <Box sx={{ gridGap: '8px', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          color: '#38BDF8',
                          border: '1px solid rgba(56, 189, 248, 0.2)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          borderRadius: '20px',
                          py: 0.5,
                          '&:hover': {
                            backgroundColor: 'rgba(56, 189, 248, 0.18)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;