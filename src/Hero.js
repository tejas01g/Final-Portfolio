import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from './assets/images/WhatsApp Image 2025-05-16 at 10.39.02_35fccef3.jpg';

// Hero section component for Tejasvi Garg's portfolio
const Hero = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, rgba(0,255,0,0.1) 100%)',
          zIndex: -1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle at center, rgba(255,0,0,0.1) 0%, transparent 70%)',
          animation: 'pulse 8s infinite',
          zIndex: -1,
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: 0.3,
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 0.5,
          },
        },
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  right: -10,
                  bottom: -10,
                  background: 'linear-gradient(45deg, #ff0000, #00ff00)',
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'rotate 10s linear infinite',
                },
                '@keyframes rotate': {
                  '0%': {
                    transform: 'rotate(0deg)',
                  },
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            >
              <Avatar
                src={profileImage}
                alt="Tejasvi Garg"
                sx={{
                  width: { xs: 150, md: 200 },
                  height: { xs: 150, md: 200 },
                  border: '4px solid rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Name */}
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              fontWeight={700}
              color="primary"
              sx={{
                textShadow: '0 0 20px rgba(255,0,0,0.7)',
                fontSize: { xs: '3rem', md: '5rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #ff0000, transparent)',
                  animation: 'shimmer 2s infinite',
                },
                '@keyframes shimmer': {
                  '0%': {
                    backgroundPosition: '-200% center',
                  },
                  '100%': {
                    backgroundPosition: '200% center',
                  },
                },
              }}
            >
              Tejasvi Garg
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Professional Title */}
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="secondary"
              sx={{
                textShadow: '0 0 15px rgba(0,255,0,0.7)',
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00ff00, transparent)',
                  animation: 'shimmer 2s infinite',
                },
              }}
            >
              Software Developer 
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Short Bio */}
            <Typography
              variant="h5"
              color="text.secondary"
              maxWidth="md"
              mx="auto"
              sx={{
                textShadow: '0 0 10px rgba(255,0,0,0.5)',
                fontSize: { xs: '1rem', md: '1.5rem' },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #ff0000, transparent)',
                  animation: 'shimmer 2s infinite',
                },
                mt: 4,
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 3 },
                background: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '4px',
                border: '1px solid rgba(255, 0, 0, 0.1)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              Passionate about building modern, responsive web applications and mobile applications with a focus on clean code and great user experiences.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 