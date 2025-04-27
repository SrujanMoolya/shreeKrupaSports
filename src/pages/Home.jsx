import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../assets/hreo.jpg';
import Craftsmanship from '../assets/logo.jpg';
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${Hero})`
        }}
      >
        <div className="container mx-auto px-4 py-32 flex items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Crafting Excellence in Cricket</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Premium Cricket Bats & Sports Equipment from Ichalkaranji</p>
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition duration-300">
                  Explore Products
                </button>
              </a>
              <a href="#contact">
                <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-gray-900 transition duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50" id='services'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Specializations</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience world-class cricket equipment crafted with precision and passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hwUgULKhTBQRmr8UUyP3EVb80TdLzBMBuQ&s")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Bats</h3>
                <p className="text-gray-600">
                  Handcrafted cricket bats tailored to your playing style and preferences.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://chouhantraders.com/wp-content/uploads/2024/09/bat-repair-services.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bat Repairs</h3>
                <p className="text-gray-600">
                  Expert repair services to extend the life of your cricket equipment.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://teamwear.blksport.com/wp-content/uploads/2018/03/BLK_DESIGNYOUROWN_banner4_.png")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Wear</h3>
                <p className="text-gray-600">
                  High-quality sports apparel and accessories for optimal performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-white" id='products'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Products</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular cricket equipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url("src/assets/${item}.png")` }}></div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">Premium Bat {item}</h3>
                  {/* <p className="text-red-600 font-bold">₹14,999</p> */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#contact">
              <button className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-md transition duration-300">
                View All Products
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Legacy</h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
              इचलकरंजीमध्ये दशकांपासूनचा अनुभव असलेल्या श्री कृपा स्पोर्ट्सने पारंपरिक कौशल्य आणि आधुनिक तंत्रज्ञान यांचा संगम साधत प्रीमियम क्रिकेट बॅट तयार करण्यात कौशल्य मिळवले आहे. आमचे कारागीर सर्वोत्तम इंग्लिश विलोचे काटेकोर निवड करून, व्यावसायिक आणि क्रिकेटप्रेमींसाठी असामान्य ताकद, योग्य संतुलन आणि टिकाऊपणाची खात्री असलेले बॅट तयार करतात.
              </p>
              <p className="text-gray-600 mb-6">
                Our master craftsmen select only the finest to create bats that deliver
                exceptional power, perfect balance, and durability for professionals and enthusiasts alike.
              </p>
              <Link to="/about">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
            <div>
              <img
                src={Craftsmanship}
                alt="Craftsmanship"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Club Cricketer",
                quote: "The custom bat I received perfectly matches my playing style. The craftsmanship is exceptional."
              },
              {
                name: "Ankit Patel",
                role: "Cricket Coach",
                quote: "We've been using their equipment for our academy for years. The quality and durability are unmatched."
              },
              {
                name: "Suresh Kumar",
                role: "Professional Player",
                quote: "Their bat repair service saved my favorite bat. Great attention to detail and quick turnaround time."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}

      <section class="py-24" id='gallery'>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-2.5 pb-10 lg:pb-16">
            <h2 class="text-center text-gray-900 text-4xl font-bold leading-normal">Our Customer Gallery</h2>
            <p class="text-center text-gray-600 text-lg leading-8">Happy Customers</p>
          </div>

          <div class="grid gap-8">
            <div class="grid md:grid-cols-12 gap-8 mb-10">
              <div class="md:col-span-4 h-[277px] md:h-[404px]">
                <img src="src\assets\Happy Customer 1.jpg" alt="Gallery" class="w-full h-full object-cover rounded-3xl hover:grayscale transition duration-700 cursor-pointer gallery-image"/>
              </div>
              <div class="md:col-span-8 h-[277px] md:h-[404px]">
                <img src="src\assets\Happy Customer 2.jpg" alt="Gallery" class="w-full h-full object-cover rounded-3xl hover:grayscale transition duration-700 cursor-pointer gallery-image"/>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="h-[277px]">
                <img src="src\assets\Happy Customer 3.jpg" alt="Gallery" class="w-full h-full object-cover rounded-3xl hover:grayscale transition duration-700 cursor-pointer gallery-image"/>
              </div>
              <div class="h-[277px]">
                <img src="src\assets\Happy Customer 4.jpg" alt="Gallery" class="w-full h-full object-cover rounded-3xl hover:grayscale transition duration-700 cursor-pointer gallery-image"/>
              </div>
              <div class="h-[277px]">
                <img src="src\assets\Happy Customer 5.jpg" alt="Gallery" class="w-full h-full object-cover rounded-3xl hover:grayscale transition duration-700 cursor-pointer gallery-image"/>
              </div>
            </div>
          </div>
        </div>


        <div id="lightbox" class="hidden fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button id="close" class="absolute top-5 right-8 text-white text-5xl font-bold">&times;</button>
          <img id="lightbox-image" src="" alt="Expanded" class="max-w-full max-h-full rounded-lg"/>
        </div>
      </section>

     


      {/* Call to Action */}
      <div className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Game?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of premium cricket equipment crafted with passion and precision
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="">
              <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 font-bold rounded-md transition duration-300">
                Visit Shop Now
              </button>
            </Link>
            <Link to="">
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold rounded-md transition duration-300">
                Custom Orders
              </button>
            </Link>
          </div>
          <a 
                    href="https://wa.me/919021414139?text=Hi%20Shree%20Krupa%20Sports%2C%20I%20need%20sports%20accessories...."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Message on WhatsApp
                  </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-16 bg-gray-100" id='contact'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for inquiries, custom orders, or any questions about our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                  <p className="text-gray-600">Hatti chowk Ichalkaranji, Maharashtra 416115</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 9021414139</p>
                  <a 
                    href="https://wa.me/919021414139?text=Hi%20Shree%20Krupa%20Sports%2C%20I%20need%20sports%20accessories...."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@shreekrupasports.com</p>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg p-2">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.9067988212405!2d74.4629217!3d16.6815467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e30052489e17%3A0x8d1dcab06a4b705f!2sShree%20krupa%20Sport&#39;s!5e0!3m2!1sen!2sin!4v1745767147416!5m2!1sen!2sin" 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Krupa Sports Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;