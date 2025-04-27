import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [category, setCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Premium English Willow',
      category: 'bats',
      image: '/gallery/bat1.jpg',
      description: 'Handcrafted premium English willow bat with perfect balance.',
    },
    {
      id: 2,
      title: 'Custom Bat Making',
      category: 'process',
      image: '/gallery/making1.jpg',
      description: 'Our master craftsman shaping a custom cricket bat.',
    },
    {
      id: 3,
      title: 'Bat Repair Workshop',
      category: 'repairs',
      image: '/gallery/repair1.jpg',
      description: 'Expert repair work in our dedicated workshop.',
    },
    {
      id: 4,
      title: 'Kashmir Willow Collection',
      category: 'bats',
      image: '/gallery/bat2.jpg',
      description: 'Our range of high-quality Kashmir willow bats.',
    },
    {
      id: 5,
      title: 'Handle Crafting',
      category: 'process',
      image: '/gallery/making2.jpg',
      description: 'Precision handle crafting for optimal performance.',
    },
    {
      id: 6,
      title: 'Edge Protection',
      category: 'repairs',
      image: '/gallery/repair2.jpg',
      description: 'Applying edge protection to enhance bat durability.',
    },
    {
      id: 7,
      title: 'Team Equipment',
      category: 'equipment',
      image: '/gallery/equipment1.jpg',
      description: 'Complete cricket equipment for teams and clubs.',
    },
    {
      id: 8,
      title: 'Custom Engravings',
      category: 'process',
      image: '/gallery/making3.jpg',
      description: 'Adding personalized engravings to custom bats.',
    },
    {
      id: 9,
      title: 'Quality Inspection',
      category: 'process',
      image: '/gallery/making4.jpg',
      description: 'Rigorous quality checks on every product.',
    },
  ];

  const filteredItems = category === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === category);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-12 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url("/gallery-bg.jpg")',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Gallery</h1>
          <p className="text-xl text-center">Explore Our Craftsmanship</p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setCategory('bats')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === 'bats'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Bats
            </button>
            <button
              onClick={() => setCategory('process')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === 'process'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => setCategory('repairs')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === 'repairs'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Repairs
            </button>
            <button
              onClick={() => setCategory('equipment')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === 'equipment'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Equipment
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 