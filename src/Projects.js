import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

// Example project data
const projects = [
  {
    title: 'Expensr',
    description: 'A expense tracker app , built with react native and express.',
    techStack: ['React-Native', 'Express.js'],
    live: 'https://github.com/tejas01g/EXPENSE--REACT-NATIVE',
    github: 'https://github.com/tejas01g/EXPENSE--REACT-NATIVE',
    image: '/src/assets/images/portfolio.png',
  },
  {
    title: 'Employee Management System',
    description: 'A full-featured employee management system with authentication and real-time updates with local storage.',
    techStack: ['React', 'Node.js', 'Express', 'Local-Storage'],
    live: 'https://github.com/tejas01g/Employee-Management-System-',
    github: 'https://github.com/tejas01g/Employee-Management-System-',
    image: '/src/assets/images/task-manager.png',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that fetches real-time weather data using a public API.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
    live: 'https://weatherweb-omega.vercel.app/',
    github: 'https://github.com/tejas01g/Wheather-Web',
    image: '/src/assets/images/weather.png',
  },
  // Add more projects as needed
];

// Projects section component
const Projects = () => {
  return (
    <Box 
      sx={{ 
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(33,150,243,0.05) 0%, rgba(100,181,246,0.05) 100%)',
          zIndex: -1,
        },
      }} 
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          fontWeight={700}
          color="primary"
          sx={{
            textShadow: '0 0 20px rgba(33,150,243,0.3)',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #2196f3, transparent)',
            },
          }}
        >
          Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(33, 150, 243, 0.2)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 30px rgba(33, 150, 243, 0.2)',
                    border: '1px solid rgba(33, 150, 243, 0.4)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    fontWeight={700}
                    color="primary"
                    sx={{
                      textShadow: '0 0 10px rgba(33,150,243,0.3)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    paragraph
                    sx={{
                      mb: 2,
                      minHeight: '4.5em',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    sx={{ mt: 2 }}
                  >
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          m: 0.5,
                          borderColor: 'rgba(33, 150, 243, 0.3)',
                          '&:hover': {
                            borderColor: 'rgba(33, 150, 243, 0.6)',
                            background: 'rgba(33, 150, 243, 0.1)',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    color="primary"
                    href={project.live}
                    target="_blank"
                    rel="noopener"
                    startIcon={<Launch />}
                    sx={{
                      mr: 1,
                      '&:hover': {
                        background: 'rgba(33, 150, 243, 0.1)',
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    startIcon={<GitHub />}
                    sx={{
                      '&:hover': {
                        background: 'rgba(100, 181, 246, 0.1)',
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 