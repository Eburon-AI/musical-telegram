# Eburon Estate

A modern property rental platform built with Next.js, showcasing premium properties in Brussels and across Belgium. Powered by PostgreSQL, Prisma, and Stripe for seamless bookings and payments.

![Eburon Estate Logo](./public/eburon-logo.png)

## Features

- 🏠 **Property Listings** - Browse authentic Brussels and Belgium estates
- 🔐 **Authentication** - Secure login with GitHub and Google OAuth
- 💳 **Payments** - Integrated Stripe checkout for reservations
- 🗺️ **Interactive Maps** - Leaflet integration to explore property locations
- 📱 **Responsive Design** - Beautiful UI with Tailwind CSS
- 🎨 **Modern Stack** - Next.js 14, TypeScript, PostgreSQL with Prisma Accelerate
- 🖼️ **Image Storage** - EdgeStore for property photos

## Tech Stack

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Database**: PostgreSQL (Prisma Accelerate)
- **Authentication**: NextAuth.js (GitHub, Google OAuth)
- **Payments**: Stripe
- **Styling**: Tailwind CSS
- **Maps**: Leaflet
- **Image Storage**: EdgeStore
- **ORM**: Prisma

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Prisma Accelerate)
- GitHub OAuth App credentials
- Google OAuth credentials
- Stripe account
- EdgeStore account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Eburon-AI/musical-telegram.git
   cd musical-telegram
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following:

   ```env
   # Database
   DATABASE_URL="your-prisma-accelerate-connection-string"
   DIRECT_DATABASE_URL="your-direct-postgresql-connection-string"

   # GitHub OAuth
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # NextAuth
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"

   # EdgeStore
   EDGE_STORE_ACCESS_KEY="your-edgestore-access-key"
   EDGE_STORE_SECRET_KEY="your-edgestore-secret-key"

   # Stripe
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"

   # Server
   NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate deploy
   ```

5. **Seed the database** (optional - adds sample Brussels properties)
   ```bash
   npm run db:seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## OAuth Setup

### GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set **Authorization callback URL** to:
   - Development: `http://localhost:3000/api/auth/callback/github`
   - Production: `https://yourdomain.com/api/auth/callback/github`

### Google OAuth Client

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add **Authorized redirect URIs**:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Eburon-AI/musical-telegram)

1. Connect your GitHub repository
2. Add all environment variables
3. Deploy

## Database Schema

The application uses the following main models:

- **User** - User accounts with OAuth support
- **Account** - OAuth account linkage
- **Listing** - Property listings (Brussels/Belgium estates)
- **Reservation** - Booking records with Stripe integration

## Sample Data

The seed script includes 8 authentic Brussels properties:
- Uccle Villa with Garden
- Grand Place Apartment
- Ixelles Maison de Maître
- European Quarter Loft
- Laeken Beaux-Arts Mansion
- Bois de la Cambre Penthouse
- Châtelain Studio
- Watermael-Boitsfort Family Home

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data

## Contributing

We welcome contributions to Eburon Estate! Please feel free to submit issues and pull requests.

## License

MIT License - see [LICENSE](./LICENSE) file for details

## Support

For support, email support@eburon.ai or visit [property.eburon.ai](https://property.eburon.ai)

---

**Built with ❤️ by the Eburon AI Team**
