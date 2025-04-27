# Shree Krupa Sports Website

A professional website for Shree Krupa Sports, specializing in custom cricket bats, bat repairs, sports equipment, and sports wear.

## Features

- Modern, responsive design with Material-UI components
- Animated transitions and interactions using Framer Motion
- Multiple sections including:
  - Hero Banner
  - About Us
  - Products Catalog
  - Services
  - Gallery
  - Contact Information
- Instagram integration
- Contact form with validation
- Interactive map
- Mobile-friendly navigation

## Tech Stack

- React.js with Vite
- Material-UI for components and styling
- Framer Motion for animations
- React Router for navigation
- Firebase for hosting

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shreekrupa-sports.git
cd shreekrupa-sports
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx
  │   └── Footer.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Products.jsx
  │   ├── Services.jsx
  │   ├── Gallery.jsx
  │   └── Contact.jsx
  ├── theme.js
  └── App.jsx
public/
  ├── images/
  │   ├── hero-bg.jpg
  │   ├── about-bg.jpg
  │   ├── products-bg.jpg
  │   ├── services-bg.jpg
  │   ├── gallery-bg.jpg
  │   ├── contact-bg.jpg
  │   └── ...
  └── gallery/
      ├── bat1.jpg
      ├── bat2.jpg
      └── ...
```

## Deployment

The website is configured for deployment on Firebase. To deploy:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (if not already done):
```bash
firebase init
```

4. Deploy:
```bash
firebase deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact:
- Email: info@shreekrupasports.com
- Phone: +91 1234567890 