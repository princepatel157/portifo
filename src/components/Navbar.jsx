import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP NAVBAR (Fixed at top of right section) */}
      <Box
        className="glass-navbar"
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'fixed',
          top: 24,
          left: { md: '384px', lg: '432px' },
          right: { md: 32, lg: 40 },
          borderRadius: '20px',
          px: 3,
          py: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1000,
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
        }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#about');
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              width: 40,
              height: 40,
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                sx={{
                  position: 'relative',
                  color: isActive ? '#F8FAFC' : '#94A3B8',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#F8FAFC',
                  },
                  py: 0.5,
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #818CF8, #38BDF8)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        {/* CTA Button */}
        <Button
          component="a"
          href="mailto:princepatel1576@gmail.com"
          variant="outlined"
          startIcon={<MailOutlineIcon style={{ fontSize: 18 }} />}
          sx={{
            borderRadius: '24px',
            px: 2.8,
            py: 0.9,
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#FFFFFF',
            borderColor: 'rgba(129, 140, 248, 0.4)',
            background: 'rgba(99, 102, 241, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#818CF8',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
              transform: 'translateY(-1px)',
            },
          }}
        >
          Let's Talk
        </Button>
      </Box>

      {/* MOBILE NAVBAR (Fixed at top of screen) */}
      <Box
        className="glass-navbar"
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          px: 2.5,
          py: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 0,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Box
          component="a"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#about');
          }}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              width: 36,
              height: 36,
              objectFit: 'contain',
            }}
          />
        </Box>

        <IconButton
          aria-label="open mobile menu"
          onClick={() => setMobileOpen(true)}
          sx={{ color: '#F8FAFC', p: 0.8 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: 'rgba(11, 15, 25, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 4,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Logo"
              sx={{
                width: 36,
                height: 36,
                objectFit: 'contain',
              }}
            />
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#94A3B8' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ width: '100%' }}>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  py: 1.5,
                  borderRadius: '10px',
                  mb: 1,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: activeSection === item.href.replace('#', '') ? '#38BDF8' : '#F8FAFC',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ pb: 2 }}>
          <Button
            component="a"
            href="mailto:princepatel1576@gmail.com"
            fullWidth
            variant="contained"
            startIcon={<MailOutlineIcon />}
            sx={{
              py: 1.4,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            }}
          >
            Let's Talk
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
