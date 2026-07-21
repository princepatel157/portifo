import React from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/princepatel157',
    icon: <GitHubIcon style={{ fontSize: 20 }} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prince-patel-bb6b32194/',
    icon: <LinkedInIcon style={{ fontSize: 22 }} />,
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/princepatel157',
    icon: (
      <svg width="20" height="20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" />
      </svg>
    ),
  },
  {
    name: 'Unsplash',
    href: 'https://unsplash.com/@princepatel1576',
    icon: (
      <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
      </svg>
    ),
  },
  {
    name: 'Gmail',
    href: 'mailto:princepatel1576@gmail.com',
    icon: <GoogleIcon style={{ fontSize: 20 }} />,
  },
];

const SidebarHero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card"
      sx={{
        p: { xs: 3, sm: 3.5 },
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        maxHeight: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {/* Profile Image with Glow Ring */}
      <Box sx={{ position: 'relative', mb: 3, width: 150, height: 150 }}>
        {/* Gradient Outer Ring */}
        <Box
          sx={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #A855F7 0%, #38BDF8 50%, #10B981 100%)',
            padding: '3px',
            animation: 'spin 12s linear infinite',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
        {/* Avatar Image Container */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            background: '#0F172A',
            border: '4px solid #0B0F19',
          }}
        >
          <Box
            component="img"
            src="/profile.jpg"
            alt="Prince Patel"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        {/* Online Status Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: '#10B981',
            border: '3px solid #0B0F19',
            boxShadow: '0 0 12px #10B981',
          }}
        />
      </Box>

      {/* Name and Designation */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '1.75rem', sm: '2rem' },
          color: '#F8FAFC',
          mb: 0.5,
          letterSpacing: '-0.5px',
        }}
      >
        Prince <span style={{ color: '#818CF8' }}>Patel</span>
      </Typography>

      <Typography
        sx={{
          color: '#38BDF8',
          fontWeight: 600,
          fontSize: '0.95rem',
          mb: 2.5,
          letterSpacing: '0.2px',
        }}
      >
        Software Development Engineer - 1
      </Typography>

      {/* Short Bio */}
      <Typography
        sx={{
          color: '#94A3B8',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          mb: 3,
          px: { xs: 1, sm: 2 },
        }}
      >
        I build scalable, full-stack web applications with clean, efficient code and great user experiences.
      </Typography>

      {/* Contact Info List */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          py: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          mb: 3,
        }}
      >
        {[
          { icon: <MailOutlineIcon style={{ fontSize: 18 }} />, label: 'princepatel1576@gmail.com', href: 'mailto:princepatel1576@gmail.com' },
          { icon: <PhoneIcon style={{ fontSize: 18 }} />, label: '+91 97183 77366', href: 'tel:+919718377366' },
          { icon: <LocationOnIcon style={{ fontSize: 18 }} />, label: 'India', href: null },
          { icon: <LanguageIcon style={{ fontSize: 18 }} />, label: 'patelprince.in', href: 'https://patelprince.in' },
        ].map((item, idx) => (
          <Box
            key={idx}
            component={item.href ? 'a' : 'div'}
            href={item.href || undefined}
            target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: '#94A3B8',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': item.href ? { color: '#38BDF8' } : {},
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38BDF8',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </Box>
            <Typography sx={{ fontSize: '0.875rem', color: 'inherit', fontWeight: 500 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Social Links */}
      <Box sx={{ width: '100%', mb: 3 }}>
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#64748B',
            textTransform: 'uppercase',
            mb: 1.5,
            textAlign: 'left',
          }}
        >
          LET'S CONNECT
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {socialLinks.map((social) => (
            <Tooltip title={social.name} key={social.name}>
              <IconButton
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#94A3B8',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.15)',
                    borderColor: '#818CF8',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Button
          component="a"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            py: 1.4,
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.95rem',
            textTransform: 'none',
            boxShadow: '0 8px 24px -6px rgba(6, 182, 212, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #4F46E5 0%, #0891B2 100%)',
              boxShadow: '0 12px 28px -4px rgba(6, 182, 212, 0.6)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Download Resume
        </Button>

        {/* Secondary button visible on mobile */}
        <Button
          component="a"
          href="mailto:princepatel1576@gmail.com"
          fullWidth
          variant="outlined"
          startIcon={<SendIcon />}
          sx={{
            display: { xs: 'flex', md: 'none' },
            py: 1.4,
            borderRadius: '14px',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            color: '#F8FAFC',
            fontWeight: 600,
            fontSize: '0.95rem',
            textTransform: 'none',
            background: 'rgba(255, 255, 255, 0.03)',
            '&:hover': {
              borderColor: '#38BDF8',
              background: 'rgba(56, 189, 248, 0.1)',
            },
          }}
        >
          Let's Talk
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarHero;
