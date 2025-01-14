import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
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
        Our platform offers a variety of lessons on financial literacy, a budget calculator that takes cost of living into account, and resources to help you achieve your financial goals.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/lessons" sx={{ mr: 2 }}>
        Explore Lessons
      </Button>
      <Button variant="outlined" color="secondary" component={Link} to="/calculator">
        Use Calculator
      </Button>

      {/* About Me Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          I am Adam Xie, a 16-year-old entrepreneur passionate about financial education. My goal is to help young adults in the UAE understand and manage their finances effectively.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
