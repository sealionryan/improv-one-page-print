# VIP One-Pager

A printable one-page marketing document for **Vegas Improv Power** showcasing their improv training services, class options, and benefits for teams and individuals.

## About This Project

This project creates a professionally designed, print-optimized one-pager (612px x 792px) that highlights Vegas Improv Power's offerings in communication, storytelling, team building, and presentation skills through improvisation training.

## Features

- **Print-Optimized Layout**: Designed for professional printing and distribution
- **VIP Brand Integration**: Custom color palette, typography, and glassmorphic design elements
- **Responsive Content**: Scales appropriately for different viewing contexts
- **Professional Typography**: Poppins for headings, Karma for body text

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd vip-one-pager-lovable
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode  
- `npm run lint` - Run ESLint linting
- `npm run preview` - Preview production build

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom VIP design system
- **UI Components**: shadcn/ui component library
- **Typography**: Google Fonts (Poppins, Karma)
- **Print Optimization**: CSS print media queries

## Design System

The project follows the VIP brand guidelines documented in:
- `VIP-STYLE-GUIDE.md` - Brand overview and design principles
- `VIP-DESIGN-SYSTEM.md` - Detailed component specifications and CSS tokens

### Key Brand Elements
- **Primary Colors**: VIP Purple (#4E4489) and VIP Coral (#FFA77A)
- **Typography**: Poppins Bold for headings, Karma Regular for body text
- **Effects**: Glassmorphic cards with subtle shadows and backdrop blur

## Project Structure

```
src/
├── components/
│   ├── VIPOnePager.tsx     # Main one-pager component
│   └── ui/                 # shadcn/ui components
├── pages/
│   ├── Index.tsx           # Home page wrapper
│   └── NotFound.tsx        # 404 page
├── lib/
│   └── utils.ts            # Utility functions
└── hooks/                  # Custom React hooks
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Print Usage

The one-pager is optimized for PDF printing and physical distribution:
- **Fixed dimensions**: 612px x 792px (8.5 x 11 inches at 72 DPI)
- **PDF-ready**: Exact sizing for standard US Letter format PDF generation
- **Print-specific CSS**: Removes shadows and optimizes colors for print
- **Professional layout**: Designed for professional distribution and marketing materials

### PDF Export Instructions
To save as PDF:
1. Open the page in your browser
2. Use browser's Print function (Ctrl/Cmd + P)
3. Select "Save as PDF" 
4. Choose "More Settings" → "Paper Size" → "Letter"
5. Set margins to "None" or "Minimum"
6. Ensure "Print backgrounds" is enabled

## Contributing

1. Follow the established VIP design system guidelines
2. Test print layouts before submitting changes
3. Run `npm run lint` to ensure code quality
4. Maintain accessibility standards

## Contact

For questions about Vegas Improv Power:
- Email: info@vegasimprov.com  
- Phone: 702-847-1111
- Website: https://vegasimprov.com/
