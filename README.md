# Team ETA Website

A modern, futuristic website for Team ETA - a university engineering team participating in Shell Eco-marathon. Built with Next.js 15, TypeScript, and cutting-edge design principles.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with custom styling
- **Smooth Animations**: Framer Motion for micro-interactions
- **SEO Optimized**: Metadata API for all pages
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Theme**: Futuristic dark theme with cyan/blue accents
- **Form Validation**: React Hook Form + Zod for contact forms
- **Performance**: Optimized for Lighthouse score ≥ 95

## 📁 Project Structure

```
team_eta/
├── app/
│   ├── cars/          # Cars listing page
│   ├── competition/   # Shell Eco-marathon page
│   ├── contact/       # Contact form page
│   ├── crowdfunding/  # Donation/crowdfunding page
│   ├── sponsors/      # Sponsors page
│   ├── team/          # Team members page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Footer.tsx
│   ├── MotionWrapper.tsx
│   ├── Navbar.tsx
│   └── SectionHeader.tsx
├── data/              # JSON data files
│   ├── achievements.json
│   ├── cars.json
│   ├── sponsors.json
│   └── team.json
└── lib/
    └── utils.ts       # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel (recommended)

## 🎨 Design Philosophy

- **Minimalism + Modern Tech Vibe**: Clean, grid-based layouts
- **Dark Theme**: Electric blue/cyan accents
- **Typography**: Space Grotesk font
- **Micro-interactions**: Smooth fade, scale, and slide animations
- **Neomorphic-glow**: Inspired button and card shadows

## 📄 Pages

1. **Home** (`/`) - Hero section, stats, mission
2. **Our Cars** (`/cars`) - Grid of car cards with details modal
3. **Shell Eco-marathon** (`/competition`) - Competition info, timeline, achievements
4. **Our Team** (`/team`) - Team members by department
5. **Sponsors** (`/sponsors`) - Sponsor grid with tiers
6. **Crowdfunding** (`/crowdfunding`) - Donation page with progress bar
7. **Contact** (`/contact`) - Contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd team_eta
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Team Data

Edit `data/team.json` to update team members.

### Update Cars

Edit `data/cars.json` to update vehicle information.

### Update Sponsors

Edit `data/sponsors.json` to update sponsor list.

### Update Achievements

Edit `data/achievements.json` to update stats and timeline.

### Styling

- Colors: Edit CSS variables in `app/globals.css`
- Components: Modify components in `components/`
- Animations: Adjust framer-motion props in components

## 🔧 Configuration

### Tailwind CSS

Configuration is in `tailwind.config.ts`. Custom animations and colors are defined here.

### Next.js

Configuration is in `next.config.js`. Image domains and other settings can be adjusted here.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Code splitting for faster initial load
- SEO-friendly metadata on all pages

## 📄 License

This project is private and proprietary to Team ETA.

## 🤝 Contributing

This is a private project for Team ETA. For contributions, please contact the team.

## 📧 Contact

For questions or support, visit the [Contact page](/contact) or email contact@teameta.com

---

Built with ❤️ by Team ETA

