import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Tooltip title="Back to Top">
            <IconButton
              onClick={scrollToTop}
              color="primary"
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1000,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'rgba(255, 0, 0, 0.2)',
                  transform: 'translateY(-5px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <KeyboardArrowUp />
            </IconButton>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 