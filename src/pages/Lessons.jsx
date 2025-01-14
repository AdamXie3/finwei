import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

function Lessons() {
  // Detailed lessons data tailored to the UAE
  const lessons = [
    {
      title: 'Understanding the UAE Banking System',
      description: (
        <div>
          <Typography variant="body1">
            In this lesson, you will learn about the various types of banks operating in the UAE, including commercial banks, Islamic banks, and investment banks. 
            Key topics include:
          </Typography>
          <ul>
            <li>How to open a bank account: Required documents, types of accounts (current, savings, etc.), and minimum balance requirements.</li>
            <li>Understanding banking services: Loans, credit cards, and online banking features.</li>
            <li>Regulatory framework: The role of the Central Bank of the UAE and financial regulations.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'The Importance of Financial Literacy',
      description: (
        <div>
          <Typography variant="body1">
            This lesson emphasizes the significance of financial literacy in today's world, especially for young adults. 
            You will explore:
          </Typography>
          <ul>
            <li>What financial literacy means and its impact on personal finance management.</li>
            <li>Key financial concepts: Interest rates, inflation, and investment returns.</li>
            <li>How financial literacy helps in making informed decisions about spending, saving, and investing.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Creating a Budget in the UAE',
      description: (
        <div>
          <Typography variant="body1">
            Learn how to create a realistic budget that reflects the cost of living in the UAE. 
            This lesson covers:
          </Typography>
          <ul>
            <li>Identifying income sources and estimating monthly expenses.</li>
            <li>Understanding the cost of living in different emirates, including housing, utilities, and transportation.</li>
            <li>Tools and techniques for tracking spending and adjusting your budget as needed.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Investing in the UAE Market',
      description: (
        <div>
          <Typography variant="body1">
            This lesson provides an overview of investment opportunities available in the UAE, including:
          </Typography>
          <ul>
            <li>Real estate investment: Understanding property markets, rental yields, and property management.</li>
            <li>Stock market basics: How to invest in UAE stocks, understanding the Dubai Financial Market (DFM) and Abu Dhabi Securities Exchange (ADX).</li>
            <li>Mutual funds and ETFs: What they are and how to choose the right ones for your investment goals.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Understanding Islamic Finance',
      description: (
        <div>
          <Typography variant="body1">
            Explore the principles of Islamic finance, which is based on Sharia law. This lesson includes:
          </Typography>
          <ul>
            <li>Key concepts: Riba (interest), Gharar (uncertainty), and Maysir (gambling).</li>
            <li>Sharia-compliant banking: How it differs from conventional banking and the types of products available.</li>
            <li>Investment options: Sukuk (Islamic bonds) and ethical investing principles.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Retirement Planning for Expats in the UAE',
      description: (
        <div>
          <Typography variant="body1">
            This lesson focuses on the importance of retirement planning for expatriates living in the UAE. Key points include:
          </Typography>
          <ul>
            <li>Understanding the UAE's pension schemes and how they apply to expatriates.</li>
            <li>Strategies for saving and investing for retirement, including individual retirement accounts (IRAs) and other options.</li>
            <li>How to calculate your retirement needs based on your lifestyle and financial goals.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Cost of Living in the UAE',
      description: (
        <div>
          <Typography variant="body1">
            Analyze the cost of living in various emirates, including Dubai and Abu Dhabi. This lesson covers:
          </Typography>
          <ul>
            <li>Key expenses: Housing, utilities, transportation, and groceries.</li>
            <li>How to create a cost of living comparison between different areas.</li>
            <li>Tips for managing expenses and maximizing your budget while living in a high-cost environment.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Financial Lessons
      </Typography>
      <Typography paragraph>
        Here you will find a variety of lessons covering essential financial concepts tailored for the UAE market.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <List>
          {lessons.map((lesson, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={lesson.title}
                secondary={lesson.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default Lessons;
