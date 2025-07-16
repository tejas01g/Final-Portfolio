import React from 'react';
import { Box, Typography, Grid, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

// List of skills/technologies
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'React-Native',
  'SQL',
  'Git',
];

// Skills section component
const Skills = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'transparent',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,255,0,0.05) 0%, rgba(255,0,255,0.05) 100%)',
          zIndex: -1,
        },
      }}
      id="skills"
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        fontWeight={600}
        color="primary"
        sx={{
          textShadow: '0 0 10px rgba(0,255,0,0.5)',
          mb: 6,
        }}
      >
        Skills
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 15px rgba(0,255,0,0.5)',
                }}
              >
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{
                    m: 1,
                    fontSize: '1.1rem',
                    px: 2,
                    py: 1,
                    borderColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(0,255,0,0.1)',
                    },
                  }}
                />
              </motion.div>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills; 