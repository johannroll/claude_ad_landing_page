# Airdocs Global Landing Page

A modern, high-performance landing page for Airdocs Global, a Customer Communications Management (CCM) SaaS platform.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Testing**: Vitest + React Testing Library
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x (LTS)
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ad_landing_page
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Copy environment variables
```bash
cp .env.local.example .env.local
```

4. Run the development server
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ad_landing_page/
├── src/
│   ├── app/                  # Next.js app router pages
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── sections/        # Page sections
│   │   ├── shared/          # Reusable components
│   │   └── forms/           # Form components
│   ├── lib/                 # Utility functions
│   ├── types/               # TypeScript types
│   ├── data/                # Static data
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
└── tests/                   # Test files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Testing

This project uses Vitest and React Testing Library for testing. All components include unit tests.

Run tests:
```bash
npm run test
```

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Documentation

- [Implementation Plan](./IMPLEMENTATION_PLAN.md) - Detailed implementation roadmap
- [shadcn Rules](./shadCN.md) - Rules for using shadcn/ui components

## License

Copyright © 2025 Airdocs Global. All rights reserved.
