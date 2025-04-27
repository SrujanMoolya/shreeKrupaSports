import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("/about-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 12,
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h1" align="center" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="h5" align="center">
            Crafting Excellence Since 1990
          </Typography>
        </Container>
      </Box>

      {/* History Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" gutterBottom>
                Our Journey
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 1990 in the heart of Ichalkaranji, Shree Krupa Sports began as a small
                workshop dedicated to crafting high-quality cricket bats. Our founder, a passionate
                cricketer and craftsman, combined traditional techniques with modern innovations to
                create bats that quickly gained recognition for their exceptional performance.
              </Typography>
              <Typography variant="body1" paragraph>
                Over the years, we've grown into a trusted name in the cricket equipment industry,
                serving players at all levels - from local clubs to professional teams. Our commitment
                to quality and craftsmanship has remained unchanged, even as we've expanded our
                product range to include a full line of sports equipment and apparel.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/workshop.jpg"
                alt="Our Workshop"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'Craftsmanship',
                description: 'Every product is crafted with attention to detail and traditional expertise.',
              },
              {
                title: 'Quality',
                description: 'We use only the finest materials and maintain strict quality standards.',
              },
              {
                title: 'Innovation',
                description: 'Continuously evolving our techniques to deliver better performance.',
              },
              {
                title: 'Customer Focus',
                description: 'Dedicated to understanding and meeting our customers\' needs.',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h5" color="primary" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1">
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Meet the skilled craftsmen and professionals behind Shree Krupa Sports
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              name: 'Rajesh Patil',
              role: 'Master Craftsman',
              image: '/team1.jpg',
            },
            {
              name: 'Suresh Desai',
              role: 'Quality Manager',
              image: '/team2.jpg',
            },
            {
              name: 'Priya Sharma',
              role: 'Customer Relations',
              image: '/team3.jpg',
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 