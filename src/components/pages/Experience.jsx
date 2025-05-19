import { Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const experiences = [
  {
    title: 'Software Development Engineer 1',
    organization: 'Languify',
    time: 'Aug 2023 – Present',
    description: 'Contributed to large-scale systems like the SEP for Cambridge University. Developed advanced features (e.g., gamification, proctoring), integrated OpenAI for smart content, and maintained quality with TDD. Also mentored peers and enhanced product performance and UX.',
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Node js', 'Material UI',
      'MongoDB',
    ]
  },
  {
    title: 'Freelance MERN Developer',
    organization: 'Remote',
    time: 'Sept 2022 – July 2023',
    description: 'Built and deployed full-stack solutions for varied clients in sectors like dairy, retail, and real estate. Delivered key features like payment gateways, WhatsApp verification, and analytics, while focusing on performance, testing, and backend optimization.',
    skills: [
      'React', 'Node js', 'Bootstrap', 'Tailwind CSS',
      'MySQL', 'Redux',
    ]
  },
  {
    title: 'Backend Developer Intern',
    organization: 'Jungleworks',
    time: 'Jan 2022 – Aug 2022',
    description: 'Worked on real-time backend development using Node.js and MySQL. Implemented essential features like coupon systems and commission handling, participated in live project sprints, and honed debugging and deployment skills.',
    skills: [
      'Node js', 'Express js', 'Linux', 'Git', 'GitLab',
      'Bash Scripting', 'MySQL'
    ]
  }
];

const sx = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingTop: '50px',
    '@media (min-width: 600px)': {
      paddingTop: '120px'
    }
  },
  cardRoot: {
    display: 'flex',
    gap: '10px',
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
      backgroundColor: '#1b253e',
      flexDirection: 'column'
    }
  },
  cardLeft: {
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  },
  cardRight: {
    width: '70%',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  },
  title: {
    color: '#E2E8F0',
    marginBottom: '10px',
    fontSize: '16px',
    '@media (max-width: 600px)': {
      width: '100%',
      fontSize: '14px'
    }
  },
  chipRoot: {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    marginTop: '15px'
  },
  chip: {
    color: 'rgb(94, 234 ,212,1)',
    borderRadius: '20px',
    backgroundColor: 'rgb(19 59 53)',
    padding: '5px 12px',
  },
  chipTitle: {
    fontSize: '14px',
    '@media (max-width: 600px)': {
      fontSize: '12px'
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
  time: {
    color: '#94A3B8', fontSize: '14px',
    '@media (max-width: 600px)': {
      fontSize: '12px'
    }
  }
};

const Chip = ({ title }) => {

  return(
    <Box sx={sx.chip}>
      <Typography sx={sx.chipTitle}>
        {title}
      </Typography>
    </Box>
  )
}

const Card = ({
  title, organization, time, description, skills=[]
}) => {

  return(
    <Box sx={sx.cardRoot}>
      <Box sx={sx.cardLeft}>
        <Typography sx={sx.time}>
          {time}
        </Typography>
      </Box>
      <Box sx={sx.cardRight}>
        <Typography sx={sx.title} className='card-title'>
          {title} - {organization}
        </Typography>
        <Typography sx={sx.time} color='#94A3B8'>
          {description}
        </Typography>
        <Box sx={sx.chipRoot}>
          {
            skills.map((skill,i) => <Chip title={skill}/>)
          }
        </Box>
      </Box>
    </Box>
  )
}

const Experience = ({...props}) => {
  return (
    <Box sx={sx.root} {...props}>
      <Typography sx={sx.heading}>
        EXPERIENCE
        <EastIcon style={{ fontSize: '20px' }}/>
      </Typography>
      {
        experiences.map((exp, i) => (<Card {...exp} key={i}/>))
      }
    </Box>
  )
}

export default Experience;