import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, IconButton, Alert } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Contact section component
const Contact = () => {
  // State for form fields
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission (for demo, just show a message)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, background: '#f7fafc' }} id="contact">
      <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
        Contact
      </Typography>
      <Box
        component={motion.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 4, background: 'white', borderRadius: 3, boxShadow: 2 }}
      >
        <Stack spacing={3}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            minRows={4}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Send Message
          </Button>
          {submitted && <Alert severity="success">Message sent! (Demo only)</Alert>}
        </Stack>
      </Box>
      {/* Social Links */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <IconButton
          component="a"
          href="mailto:gargtejasvi076@gmail.com"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <Email fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/tejasvi-garg-288109270/"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/tejas01g"
          target="_blank"
          rel="noopener"
          color="primary"
        >
          <GitHub fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact; 