import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Bat Repairs',
      description: 'Expert repair services for damaged cricket bats, including handle replacements, blade repairs, and grip replacements.',
      image: '/repair.jpg',
      features: [
        'Handle Replacement',
        'Blade Repairs',
        'Grip Replacement',
        'Edge Protection',
        'Toe Guard Installation',
      ],
    },
    {
      title: 'Bat Customization',
      description: 'Personalize your cricket bat with custom engravings, grip colors, and handle types to match your style.',
      image: '/customization.jpg',
      features: [
        'Custom Engravings',
        'Grip Customization',
        'Handle Selection',
        'Color Options',
        'Personal Branding',
      ],
    },
    {
      title: 'Equipment Maintenance',
      description: 'Professional maintenance services for all cricket equipment to ensure optimal performance and longevity.',
      image: '/maintenance.jpg',
      features: [
        'Glove Conditioning',
        'Pad Maintenance',
        'Helmet Inspection',
        'Kit Cleaning',
        'Equipment Storage',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("/services-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 12,
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h1" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5" align="center">
            Expert Care for Your Cricket Equipment
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Learn More
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Repair Process Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Our Repair Process
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                step: 1,
                title: 'Assessment',
                description: 'Thorough inspection of the damage and discussion of repair options.',
              },
              {
                step: 2,
                title: 'Repair Plan',
                description: 'Detailed plan outlining the required repairs and estimated timeline.',
              },
              {
                step: 3,
                title: 'Execution',
                description: 'Expert execution of repairs using premium materials and techniques.',
              },
              {
                step: 4,
                title: 'Quality Check',
                description: 'Rigorous quality inspection to ensure perfect restoration.',
              },
            ].map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.step}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container sx={{ py: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Restore Your Equipment?
          </Typography>
          <Typography variant="h6" paragraph>
            Contact us today for a free assessment of your cricket equipment.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Schedule a Consultation
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Services; 