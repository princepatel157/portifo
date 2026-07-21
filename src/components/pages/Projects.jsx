import React from 'react';
import { Box, Typography, Grid, Chip, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Tenant Network (Real Estate)',
    description:
      'An online rental platform where tenants can browse houses and flats for rent, and directly contact house owners or brokers. Property owners and brokers can also list their rental properties easily on the platform.',
    image: '/tnnetwork.png',
    link: 'https://tenantnetwork.in',
    github: 'https://github.com/princepatel157',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    name: 'Ashi Helmets',
    description:
      'An e-commerce website for a helmet store where users can browse and purchase cricket helmets and related accessories directly from the site.',
    image: '/ashi-helmet.jpeg',
    link: 'https://ashihelmet.com',
    github: 'https://github.com/princepatel157',
    techStack: ['React', 'Node.js', 'Razorpay', 'MongoDB', 'Material UI'],
  },
  {
    name: 'Fertile Minds',
    description:
      'A blogging platform where users can publish their blogs and access detailed analytics reports to track engagement and performance.',
    image: '/blog-page.jpeg',
    link: null,
    github: 'https://github.com/princepatel157',
    techStack: ['React', 'Node.js', 'Chart.js', 'Express.js', 'MySQL'],
  },
  {
    name: 'Nana Dairy Farming',
    description:
      'A farm store website focused on product management and showcasing, allowing customers to browse products, place orders, and make inquiries easily.',
    image: '/nana-dairy.png',
    link: 'https://nanadairyfarming.in',
    github: 'https://github.com/princepatel157',
    techStack: ['React', 'Node.js', 'Bootstrap', 'WhatsApp OTP', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          color: '#38BDF8',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          mb: 4,
        }}
      >
        <FolderIcon style={{ fontSize: 16 }} />
        FEATURED PROJECTS
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3.5}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <Box
              component={motion.div}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="glass-card"
              sx={{
                height: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.25)',
                  '& .project-img': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              {/* Image Preview Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 210,
                  overflow: 'hidden',
                  background: '#0B0F19',
                }}
              >
                <Box
                  component="img"
                  className="project-img"
                  src={project.image}
                  alt={project.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    opacity: 0.9,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.9) 100%)',
                  }}
                />
              </Box>

              {/* Card Content */}
              <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: '#F8FAFC',
                    mb: 1.2,
                  }}
                >
                  {project.name}
                </Typography>

                <Typography
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    mb: 2.5,
                    flex: 1,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        color: '#818CF8',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        height: 24,
                      }}
                    />
                  ))}
                </Box>

                {/* Buttons */}
                <Box sx={{ display: 'flex', gap: 1.5, pt: 1, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  {project.link && (
                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      startIcon={<OpenInNewIcon style={{ fontSize: 16 }} />}
                      sx={{
                        borderRadius: '10px',
                        px: 2,
                        py: 0.8,
                        background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4F46E5 0%, #0891B2 100%)',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}

                  {project.github && (
                    <Button
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      startIcon={<GitHubIcon style={{ fontSize: 16 }} />}
                      sx={{
                        borderRadius: '10px',
                        px: 2,
                        py: 0.8,
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                        color: '#94A3B8',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: '#38BDF8',
                          color: '#F8FAFC',
                          background: 'rgba(56, 189, 248, 0.1)',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;