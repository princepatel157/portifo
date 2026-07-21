import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import SidebarHero from './SidebarHero';
import Pages from './pages';
import Footer from './Footer';

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#070A12',
        color: '#F8FAFC',
        position: 'relative',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* Background Radial Ambient Glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Interactive Cursor Radial Follower Glow */}
      <Box
        sx={{
          position: 'fixed',
          top: -300,
          left: -300,
          width: 600,
          height: 600,
          borderRadius: '50%',
          opacity: 0.22,
          pointerEvents: 'none',
          zIndex: 1,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.15) 45%, rgba(7, 10, 18, 0) 70%)',
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* Main Full-Width Wrapper with Outer Padding */}
      <Box
        sx={{
          width: '100%',
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          py: { xs: 2, md: 3 },
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Left Column - Fixed Full Viewport Height Sidebar */}
          <Box
            sx={{
              width: { xs: '100%', md: '320px', lg: '360px' },
              flexShrink: 0,
              position: { xs: 'relative', md: 'fixed' },
              top: { md: 24 },
              left: { md: 32, lg: 40 },
              height: { md: 'calc(100vh - 48px)' },
              zIndex: 100,
            }}
          >
            <SidebarHero />
          </Box>

          {/* Right Column - Scrollable Content with Top Margin for Fixed Navbar */}
          <Box
            sx={{
              width: { xs: '100%', md: 'calc(100% - 344px)', lg: 'calc(100% - 392px)' },
              ml: { xs: 0, md: '344px', lg: '392px' },
              pt: { xs: 0, md: '84px' },
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
            }}
          >
            <Navbar />
            <Pages />
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
