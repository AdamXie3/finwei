import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Finwei
      </Typography>
      <Typography variant="h5" paragraph>
        Finwei is a financial education platform designed to empower individuals with the knowledge and tools necessary to manage their finances effectively.
      </Typography>
      <Typography variant="h6" paragraph>
        Founded by Adam Xie, a passionate 16-year-old entrepreneur, Finwei aims to provide tailored financial resources for young adults in the UAE.
      </Typography>
      <Typography variant="h6" paragraph>
        Our platform offers a variety of lessons on financial literacy, a budget calculator that takes cost of living into account, and resources to help you achieve your financial goals.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/lessons" sx={{ mr: 2 }}>
        Explore Lessons
      </Button>
      <Button variant="outlined" color="secondary" component={Link} to="/calculator">
        Use Calculator
      </Button>
    </Container>
  );
}

export default Home;
