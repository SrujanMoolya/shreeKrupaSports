import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[80vh] flex items-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("/hero-bg.jpg")',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crafting Excellence in Cricket
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Premium Cricket Bats & Sports Equipment from Ichalkaranji
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn btn-secondary"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Bats',
                description: 'Handcrafted cricket bats tailored to your playing style and preferences.',
              },
              {
                title: 'Bat Repairs',
                description: 'Expert repair services to extend the life of your cricket equipment.',
              },
              {
                title: 'Sports Wear',
                description: 'High-quality sports apparel and accessories for optimal performance.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Legacy
              </h2>
              <p className="text-gray-600 mb-6">
                With decades of experience in Ichalkaranji, we've mastered the art of crafting
                premium cricket bats that combine traditional craftsmanship with modern technology.
              </p>
              <Link
                to="/about"
                className="btn btn-primary"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/craftsmanship.jpg"
                alt="Craftsmanship"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 