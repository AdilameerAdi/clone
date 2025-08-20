# Olympus Website Clone

A pixel-perfect clone of the Olympus gaming server website built with Next.js 14 and Tailwind CSS.

## Features

- **Homepage**: Hero section with call-to-action buttons and server information
- **Wiki**: Interactive sidebar navigation with expandable categories and detailed game rules
- **Changelog**: Recent posts sidebar with detailed changelog entries
- **Staff Members**: Team showcase page
- **Shop Rotations**: Placeholder for shop rotation information
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Dark Theme**: Consistent dark theme matching the original website
- **Interactive Navigation**: Dropdown menus and hover effects

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── changelog/          # Changelog page
│   ├── shop-rotations/     # Shop rotations page
│   ├── staff/              # Staff members page
│   ├── wiki/               # Wiki page with sidebar
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
└── components/
    └── Navigation.tsx      # Main navigation component
```

## Pages

- `/` - Homepage with hero section
- `/wiki` - Wiki with interactive sidebar navigation
- `/changelog` - Changelog posts with sidebar
- `/staff` - Staff members showcase
- `/shop-rotations` - Shop rotations (placeholder)

## Customization

The website uses a custom color scheme defined in `tailwind.config.ts`:
- Primary: Blue (#4A9EFF)
- Background: Dark gray (#1a1a1a)
- Cards: Gray-800
- Text: White/Gray variants

## Original Website

This is a clone of [https://wiki.olympusgg.com/](https://wiki.olympusgg.com/)

## License

This project is for educational purposes only.
