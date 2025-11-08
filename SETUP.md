# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Setup

No environment variables are required for basic functionality. For production:

- Add your contact email in `app/contact/page.tsx`
- Update social media links in `components/Footer.tsx` and `app/contact/page.tsx`
- Configure payment gateways in `app/crowdfunding/page.tsx` (Razorpay, PayPal, UPI)

## Customization

### Update Content

- **Team Members**: Edit `data/team.json`
- **Cars**: Edit `data/cars.json`
- **Sponsors**: Edit `data/sponsors.json`
- **Achievements**: Edit `data/achievements.json`

### Update Colors

Edit CSS variables in `app/globals.css`:
```css
--primary: 195 100% 50%; /* Cyan/Blue */
--background: 222.2 84% 4.9%; /* Dark background */
```

### Add Images

Place images in `public/images/`:
- `public/images/cars/` - Car images
- `public/images/team/` - Team member photos
- `public/images/sponsors/` - Sponsor logos

Update image paths in respective JSON files.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## Features to Implement

- [ ] Payment gateway integration (Razorpay/PayPal)
- [ ] Contact form backend (API route)
- [ ] Google Maps embed
- [ ] Image optimization (add actual images)
- [ ] Analytics integration
- [ ] Newsletter signup

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Support

For issues or questions, contact the development team.

