import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={toggleTheme}
          color="primary"
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(33, 150, 243, 0.2)',
            },
          }}
        >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};

export default ThemeToggle; 