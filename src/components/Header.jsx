import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/princepatel157',
    icon: <GitHubIcon style={{fontSize: '28px'}}/>
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prince-patel-bb6b32194/',
    icon: <LinkedInIcon style={{fontSize: '30px'}}/>
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/princepatel157',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '28px', height: '28px' }}
        aria-hidden="true"
      >
        <path
          d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
          strokeWidth="5"
        ></path>
      </svg>
    )
  },
  {
    name: 'Unsplash',
    href: 'https://unsplash.com/@princepatel1576',
    icon: (
      <svg 
        class="FrJfL" 
        viewBox="0 0 32 32" version="1.1"
        aria-labelledby="unsplash-home"
        aria-hidden="false"
        style={{ width: '26px', height: '26px'}}
        >
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill="#94A3B8" />
      </svg>
    )
  },
  {
    name: 'Gmail',
    href: 'mailto:princepatel1576@gmail.com',
    icon: <GoogleIcon style={{fontSize: '30px'}}/>
  },
]

const sx = {
  root: {
    width: '50%',
    '@media (max-width: 1000px)': {
      width: '100%'
    },
  },
  header: {
    padding: '50px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'fit-content',
    '@media (min-width: 1000px)': {
      padding: '100px 0px',
      position: 'fixed',
      height: '100vh',
      top: 0,
      bottom: 0,
    },
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },
  pagesRoot: {
    display: 'flex', marginTop: '30px',
    flexDirection: 'column',
    gap: '10px',
    '@media (max-width: 1000px)': {
      display: 'none !important',
      marginTop: '0px'
    }
  },
  socialLinks: {
    display: 'flex', gap: '10px',
    '@media (max-width: 1000px)': {
      marginTop: '50px'
    }
  }
};

const pages= [
  {
    _id: 'introduction',
    name: 'ABOUT',
  },
  {
    _id: 'experience',
    name: 'EXPERIENCE'
  }
  
]

const Header = ({ activeSection, handleScroll=()=>{} }) => {

  return (
    <Box sx={sx.root}>
      <Box sx={sx.header}>
        <Box sx={sx.mainSection}>
          <Box>
            <Typography style={{fontSize: '50px', fontWeight: 600, color: '#E2E8F0'}}>
              Prince Patel
            </Typography>
            <Typography sx={{fontSize: '20px', marginBottom: '15px'}}>
              Software Development Engineer - 1
            </Typography>
            <Typography sx={{fontSize: '16px', color: '#6B7FA4'}}>
              I build scalable, full-stack web apps <br/>with clean, efficient code.
            </Typography>
          </Box>

          {/* pages */}
          <Box sx={sx.pagesRoot}>
            {
              pages.map((page, i)=>{
                return(
                  <Box key={i} onClick={()=>handleScroll(page._id)} style={{cursor: 'pointer'}}>
                    <Typography color={activeSection===page._id ? '#fff' : '#94A3B8'}>
                      {page.name}
                    </Typography>
                  </Box>
                )
              })
            }
          </Box>
        </Box>

        {/* social links */}
        <Box sx={sx.socialLinks}>
          {
            socialLinks.map((data,i)=>{
              return <a 
                  style={{
                    cursor: 'pointer', color: '#94A3B8', textDecoration: 'none',
                    "&:hover": {
                      color: '#fff'
                    }
                  }}
                  href={data.href} target='_blank' rel="noreferrer"
                >
                {
                  data.icon
                }
              </a>
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Header;