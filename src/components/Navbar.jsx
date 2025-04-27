import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Products', path: '#products' },
    { text: 'Services', path: '#services' },
    { text: 'Gallery', path: '#gallery' },
    { text: 'Contact', path: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
            
              <span className="text-white text-2xl font-bold">Shree Krupa Sports</span>
            </RouterLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleDrawerToggle}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.path}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-600">
          {menuItems.map((item) => (
            <RouterLink
              key={item.text}
              to={item.path}
              onClick={handleDrawerToggle}
              className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.text}
            </RouterLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 