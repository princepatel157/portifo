import { Box, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EastIcon from '@mui/icons-material/East';

const projects = [
  {
    name: 'Tenant Network (Real Estate)',
    description: 'An online rental platform where tenants can browse houses and flats for rent, and directly contact house owners or brokers. Property owners and brokers can also list their rental properties easily on the platform.',
    image: '/tnnetwork.png',
    link: 'https://tenantnetwork.in'
  },
  {
    name: 'Ashi Helmets',
    description: 'An e-commerce website for a helmet store where users can browse and purchase cricket helmets and related accessories directly from the site.',
    image: '/ashi-helmet.jpeg',
    link: 'https://ashihelmet.com'
  },
  {
    name: 'Fertile Minds',
    description: 'A blogging platform where users can publish their blogs and access detailed analytics reports to track engagement and performance.',
    image: '/blog-page.jpeg',
    link: null
  },
  {
    name: 'Nana Dairy Farming',
    description: 'A farm store website focused on product management and showcasing, allowing customers to browse products, place orders, and make inquiries easily.',
    image: '/nana-dairy.png',
    link: 'https://nanadairyfarming.in'
  },
]

const sx = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingTop: '50px',
    '@media (max-width: 600px)': {
      gap: '25px'
    }
  },
  heading: {
    fontSize: '20px',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    '@media (max-width: 600px)': {
      fontSize: '15px'
    }
  },
  cardRoot: {
    display: 'flex',
    gap: '15px',
    cursor: 'pointer',
    borderRadius: '8px',
    padding: '15px',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1b253e',
    },
    '&:hover .card-title': {
      color: 'rgb(94,234,212,1)',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column-reverse',
      padding: '0px',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '&:hover .project-image': {
      opacity: '0.9 !important',
    },
  },
  cardLeft: {
    overflow: 'hidden',
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  },
  imageContainer: {
    height: '90px',
    width: '100%',
    margin: '5px',
    overflow: 'hidden',
    borderRadius: '10px',
    '@media (max-width: 600px)': {
      width: '60%',
    }
  },
  cardRight: {
    overflow: 'hidden',
    width: '70%',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  },
  title: {
    color: '#E2E8F0',
    marginBottom: '8px',
    display: 'flex', 
    alignItem: 'center',
    gap: '5px',
    fontSize: '16px',
    '@media (max-width: 600px)': {
      fontSize: '14px'
    }
  },
  desc: {
    fontSize: '13px',
    color: '#94A3B8'
  }
}

const Card = ({
  name, description, image, link
}) => {

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box sx={sx.cardRoot}>
        <Box sx={sx.cardLeft}>
          <Box sx={sx.imageContainer}>
            <img 
              src={image} alt={name}
              className='project-image'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: 0.5
              }}
            />
          </Box>
        </Box>
        <Box sx={sx.cardRight}>
          <Typography sx={sx.title} className='card-title'>
            {name}
            {
              link && <ArrowOutwardIcon style={{ fontSize: '20px'}}/>
            }
          </Typography>
          <Typography sx={sx.desc}>
            {description}
          </Typography>
        </Box>
      </Box>
    </a>
  )
}

const Projects = () => {
  return (
    <Box sx={sx.root}>
      <Typography sx={sx.heading}>
        Projects
        <EastIcon style={{ fontSize: '20px' }}/>
      </Typography>

      {
        projects.map((exp, i) => (<Card {...exp} key={i}/>))
      }
    </Box>
  )
}

export default Projects