import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const Products = () => {
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium English Willow Bat',
      category: 'bats',
      price: '₹15,000',
      image: '/bat1.jpg',
      description: 'Handcrafted from premium English willow, perfect for professional players.',
      features: ['Premium Grade', 'Light Weight', 'Perfect Balance'],
    },
    {
      id: 2,
      name: 'Kashmir Willow Bat',
      category: 'bats',
      price: '₹8,000',
      image: '/bat2.jpg',
      description: 'High-quality Kashmir willow bat for intermediate players.',
      features: ['Durable', 'Great Value', 'Excellent Performance'],
    },
    {
      id: 3,
      name: 'Batting Gloves',
      category: 'equipment',
      price: '₹2,500',
      image: '/gloves.jpg',
      description: 'Premium batting gloves with enhanced protection.',
      features: ['Premium Leather', 'Comfortable Fit', 'Shock Absorption'],
    },
    {
      id: 4,
      name: 'Batting Pads',
      category: 'equipment',
      price: '₹3,500',
      image: '/pads.jpg',
      description: 'Professional-grade batting pads for maximum protection.',
      features: ['Lightweight', 'Durable', 'Comfortable'],
    },
    {
      id: 5,
      name: 'Team Jersey',
      category: 'apparel',
      price: '₹1,500',
      image: '/jersey.jpg',
      description: 'High-quality team jerseys available in various colors.',
      features: ['Breathable Fabric', 'Customizable', 'Durable'],
    },
    {
      id: 6,
      name: 'Cricket Kit Bag',
      category: 'equipment',
      price: '₹4,000',
      image: '/kitbag.jpg',
      description: 'Spacious cricket kit bag with multiple compartments.',
      features: ['Waterproof', 'Durable', 'Multiple Pockets'],
    },
  ];

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("/products-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 12,
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h1" align="center" gutterBottom>
            Our Products
          </Typography>
          <Typography variant="h5" align="center">
            Premium Cricket Equipment for Every Player
          </Typography>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Container sx={{ py: 4 }}>
        <Tabs
          value={category}
          onChange={(e, newValue) => setCategory(newValue)}
          centered
          sx={{ mb: 4 }}
        >
          <Tab value="all" label="All Products" />
          <Tab value="bats" label="Cricket Bats" />
          <Tab value="equipment" label="Equipment" />
          <Tab value="apparel" label="Apparel" />
        </Tabs>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {product.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Custom Bat Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Custom Cricket Bats
              </Typography>
              <Typography variant="body1" paragraph>
                Looking for a bat that perfectly matches your playing style? Our custom bat service
                allows you to create your dream cricket bat with personalized specifications.
              </Typography>
              <Typography variant="body1" paragraph>
                Choose from premium English willow or Kashmir willow, select your preferred weight,
                handle type, and grip. Our master craftsmen will bring your vision to life.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
              >
                Design Your Bat
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/custom-bat.jpg"
                alt="Custom Cricket Bat"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Products; 