# Boreora Smart Journal

A modern, AI-powered journaling application built with Next.js that helps users reflect on their thoughts and gain insights through intelligent analysis.

## 🚀 Features

- **Smart Journaling**: Write and organize your thoughts with AI-powered insights
- **AI Analysis**: Get intelligent suggestions and mood analysis from your entries
- **Clean Interface**: Modern, responsive design built with Tailwind CSS
- **Real-time Updates**: Instant feedback and auto-save functionality
- **Secure**: User authentication and data privacy protection

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **AI Integration**: OpenAI/Anthropic (configurable)
- **Database**: Prisma with PostgreSQL (planned)
- **Authentication**: NextAuth.js (planned)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── login/             # Authentication
│   ├── dashboard/         # Main dashboard
│   ├── journal/           # Journal entries
│   │   └── [id]/         # Individual journal entry
│   └── api/              # API routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   ├── journal/          # Journal-specific components
│   ├── ai/               # AI-related components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── services/             # External service integrations
├── types/                # TypeScript definitions
├── store/                # State management
└── config/               # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/boreora-smart-journal.git
cd boreora-smart-journal
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# AI Services
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"
```

## 🎯 Roadmap

- [ ] User authentication system
- [ ] Journal entry CRUD operations
- [ ] AI-powered mood analysis
- [ ] Smart writing suggestions
- [ ] Data visualization and insights
- [ ] Export functionality
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Geist](https://vercel.com/font)

---

Made with ❤️ by Thanh Pham.
