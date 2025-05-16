import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Container, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import DownloadResume from './components/DownloadResume';

// Create themes
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#64b5f6',
      contrastText: '#000000',
    },
    error: {
      main: '#1976d2',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#2196f3',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.2), transparent)',
            transition: '0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(33, 150, 243, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #2196f3',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(33, 150, 243, 0.5)',
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(33, 150, 243, 0.3)',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  ...darkTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#64b5f6',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#2196f3',
    },
  },
});

// Main App component with navigation and routing
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <ScrollProgress />
        <AnimatedBackground />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <BackToTop />
        
        {/* Navigation Bar */}
        <AppBar 
          position="sticky" 
          color="default" 
          elevation={1}
          sx={{
            '& .MuiToolbar-root': {
              minHeight: { xs: '64px', md: '80px' },
            },
          }}
        >
          <Toolbar 
            sx={{ 
              justifyContent: 'center',
              gap: { xs: 1, md: 2 },
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              py: { xs: 1, md: 0 },
            }}
          >
            <Button 
              component={Link} 
              to="/" 
              color="primary" 
              sx={{ 
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Home
            </Button>
            <Button 
              component={Link} 
              to="/projects" 
              color="primary"
              sx={{ 
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Projects
            </Button>
            <Button 
              component={Link} 
              to="/skills" 
              color="primary"
              sx={{ 
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Skills
            </Button>
            <Button 
              component={Link} 
              to="/contact" 
              color="primary"
              sx={{ 
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Contact
            </Button>
            <DownloadResume />
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box 
          sx={{ 
            minHeight: '90vh', 
            background: 'transparent',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, rgba(33,150,243,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: -1,
            },
          }}
        >
          <Container 
            maxWidth="lg" 
            disableGutters
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
