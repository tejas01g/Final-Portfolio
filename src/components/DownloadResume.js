import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tejasvi_Garg_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tooltip title="Download Resume">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          onClick={handleDownload}
          size="small"
          sx={{
            ml: 2,
            background: 'rgba(255, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(255, 0, 0, 0.9)',
              transform: 'translateY(-2px)',
              boxShadow: '0 5px 15px rgba(255, 0, 0, 0.3)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Resume
        </Button>
      </motion.div>
    </Tooltip>
  );
};

export default DownloadResume; 