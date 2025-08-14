# Sahil Sonkamble - Portfolio

A modern, responsive portfolio website built with React, showcasing my skills, projects, and professional experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Single Page Application**: Built with React Router for smooth navigation
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and structured data
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── manifest.json
│   ├── _redirects
│   └── assets/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── IntroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── Projects.jsx
│   │   └── Technology.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ResumePage.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add this to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🔧 Configuration

### Update Meta Tags

Edit `index.html` to update:
- Your name and title
- Meta descriptions
- Social media URLs
- Favicon

### Update Content

- **Personal Info**: Update personal information in components
- **Projects**: Add your projects to the Technology component
- **Resume**: Update the ResumePage with your actual experience
- **Images**: Replace placeholder images in `src/assets/`

### Customize Styling

- **Colors**: Update the purple theme in `src/index.css`
- **Fonts**: Change fonts in Tailwind config
- **Layout**: Modify component layouts as needed

## 📱 PWA Features

The portfolio includes Progressive Web App features:
- Offline capability
- Install prompt on mobile
- App-like experience
- Fast loading times

## 🔍 SEO Optimization

- Proper meta tags
- Open Graph tags for social sharing
- Structured data
- Semantic HTML
- Fast loading times

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: sahilsonkamble@gmail.com
- **GitHub**: [@sahilsonkamble](https://github.com/sahilsonkamble)
- **Portfolio**: [Your Portfolio URL]

---

Made with ❤️ by Sahil Sonkamble
