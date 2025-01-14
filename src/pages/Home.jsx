import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Master Your Financial Future
              </Typography>
              <Typography variant="h5" paragraph>
                UAE's Premier Financial Education Platform
              </Typography>
              <Button variant="contained" color="secondary" size="large" component={Link} to="/lessons" sx={{ mr: 2 }}>
                Start Learning
              </Button>
              <Button variant="outlined" color="inherit" size="large" component={Link} to="/calculator">
                Try Calculator
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
