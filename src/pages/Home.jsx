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
              <Typography variant="body1" paragraph>
                Created by Adam Xie, a 16-year-old entrepreneur passionate about financial education.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={Link}
                to="/lessons" // Ensure this route exists
                sx={{ mr: 2 }}
              >
                Start Learning
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size="large"
                component={Link}
                to="/calculator" // Ensure this route exists
              >
                Try Calculator
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img 
                src="/your-profile-image.jpg" // Ensure this points to a valid image
                alt="Adam Xie - Founder of FinWei"
                style={{ 
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '8px',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Financial Lessons
            </Typography>
            <Typography>
              Learn essential financial concepts tailored for the UAE market.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              AI Budget Calculator
            </Typography>
            <Typography>
              Plan your finances with our smart budgeting tool.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Cost of Living Guide
            </Typography>
            <Typography>
              Comprehensive guide to living expenses in the UAE.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
