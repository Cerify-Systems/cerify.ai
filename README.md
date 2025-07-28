# Cerify Landing Page

A modern, responsive landing page for Cerify - an AI-powered smart contract security auditing platform.

## Tech Stack

- **Frontend**: React 19 + Create React App
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Project Structure

```
Cerify-Landing-Final/
├── public/
│   ├── index.html                  # HTML template
│   └── figmaAssets/               # Static assets (SVGs, images)
├── src/
│   ├── components/
│   │   └── ui/                    # shadcn/ui components
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.jsx
│   │   └── use-toast.js
│   ├── lib/                       # Utility functions
│   │   └── utils.js
│   ├── pages/
│   │   ├── sections/              # Landing page sections
│   │   │   ├── NavigationBarSection.jsx
│   │   │   ├── HeroBannerSection.jsx
│   │   │   ├── KeyFeaturesSection.jsx
│   │   │   ├── ProcessStepsSection.jsx
│   │   │   ├── DetectionProcessSection.jsx
│   │   │   ├── UserRatingsSection.jsx
│   │   │   ├── DeploySmartContractsSection.jsx
│   │   │   └── SiteFooterSection.jsx
│   │   ├── DesktopModified.jsx    # Main landing page
│   │   └── not-found.jsx          # 404 page
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global styles
│   └── index.js                   # App entry point
├── components.json                # shadcn/ui configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── readme.md                     # This file
```
## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation & Setup

1. **Clone or navigate to the project:**
   ```bash
   cd Cerify-Landing-Final
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm start` - Runs development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 📱 Landing Page Sections

## 📱 Landing Page Sections

- **🧭 Navigation** - Header with Cerify branding and menu
- **🎯 Hero Banner** - Main value proposition and $7.9B problem statement
- **⭐ Key Features** - Six core platform capabilities
- **📋 Process Steps** - Four-step workflow from upload to certification
- **🔍 Detection Process** - Feature comparison with competitors
- **💬 User Ratings** - Customer testimonials and reviews
- **🚀 Deploy Smart Contracts** - Beta access call-to-action
- **📞 Footer** - Company information and social links

## ✨ Features

- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- ⚡ **Fast Performance** - Optimized React components
- ♿ **Accessible** - WCAG compliant with proper semantic markup
- 🔧 **Easy to Maintain** - Clean, modular component structure
- 🎭 **Interactive Elements** - Hover effects and smooth transitions

## 🛠️ Development

### Project Setup
- Built with Create React App for easy development
- Uses modern React patterns (functional components, hooks)
- ESLint configured for code quality
- Responsive design with Tailwind CSS

### Component Structure
- Each landing page section is a separate component
- Reusable UI components in `src/components/ui/`
- Custom hooks for shared logic
- Clean separation of concerns

---
