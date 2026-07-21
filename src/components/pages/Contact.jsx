import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box
      id="contact"
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 8 }, width: '100%' }}
    >
      <Box
        className="glass-card"
        sx={{
          p: { xs: 3.5, sm: 5, md: 6 },
          borderRadius: '24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.4) 100%)',
          border: '1px solid rgba(129, 140, 248, 0.3)',
          boxShadow: '0 20px 50px -15px rgba(99, 102, 241, 0.25)',
        }}
      >
        {/* Ambient Top Glow */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Mail Icon Circle */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
            border: '1px solid rgba(129, 140, 248, 0.4)',
            color: '#818CF8',
            mb: 3,
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
          }}
        >
          <Mail size={26} />
        </Box>

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
            color: '#F8FAFC',
            mb: 2,
            letterSpacing: '-0.5px',
          }}
        >
          Let's build something <span className="gradient-text-purple-cyan">amazing together!</span>
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            color: '#94A3B8',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            maxWidth: 580,
            mx: 'auto',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          I'm always open to discussing new opportunities, full-stack developer roles, or interesting collaborative projects.
        </Typography>

        {/* Main CTA Button */}
        <Box sx={{ mb: 4 }}>
          <Button
            component="a"
            href="mailto:princepatel1576@gmail.com"
            variant="contained"
            size="large"
            startIcon={<Send size={18} />}
            sx={{
              py: 1.6,
              px: 4,
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 8px 30px rgba(6, 182, 212, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #4F46E5 0%, #0891B2 100%)',
                boxShadow: '0 12px 35px rgba(6, 182, 212, 0.6)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Let's Talk
          </Button>
        </Box>

        {/* Location Badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: '#94A3B8',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          <MapPin size={16} style={{ color: '#38BDF8' }} />
          Based in India
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
