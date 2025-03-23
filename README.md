# RF Engineer Portfolio

A modern, responsive portfolio website tailored for RF Engineers and telecommunications professionals. This site showcases skills, experience, projects, and certifications with interactive and visually appealing components.

## Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Dark/Light Mode**: Toggle between light and dark themes
- **Interactive Portfolio**: Filterable projects with infographic visualizations
- **Professional Resume**: Detailed work history with printable format
- **Education Timeline**: Visual representation of academic journey
- **Certifications Showcase**: Highlight professional credentials
- **Modern UI Components**: Navbar, interactive cards, and animated elements

## Technical Stack

- React 18
- React Router 6
- CSS3 with custom properties (variables)
- FontAwesome for icons
- Responsive design with media queries

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/rf-engineer-portfolio.git
```

2. Navigate to the project directory:
```
cd rf-engineer-portfolio
```

3. Install the dependencies:
```
npm install
```
or
```
yarn install
```

4. Start the development server:
```
npm start
```
or
```
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site

## Customization

### Changing Personal Information

- Edit the data in each component file (Home.js, Resume.js, etc.) to reflect your experience
- Replace placeholder infographics with your own images if desired
- Update contact information in the Footer component

### Styling

- Color scheme can be modified in App.css by changing the CSS variables
- Component-specific styles are in their respective CSS files
- Responsive breakpoints can be adjusted in the media queries

## Deployment

This site can be deployed to various platforms:

### Build for Production

```
npm run build
```
or
```
yarn build
```

This creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages

1. Install gh-pages:
```
npm install --save-dev gh-pages
```

2. Add homepage to package.json:
```json
"homepage": "https://yourusername.github.io/rf-engineer-portfolio"
```

3. Add deploy scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

4. Deploy:
```
npm run deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- FontAwesome for the icon library
- React community for the excellent documentation
- Telecommunications industry resources for reference 