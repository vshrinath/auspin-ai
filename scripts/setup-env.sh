#!/bin/bash

# Salient Platform Environment Setup Script
# This script copies .env.example files to .env files for quick setup

echo "🚀 Setting up Salient Platform environment variables..."

# Root .env
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created root .env file"
else
    echo "⚠️  Root .env file already exists, skipping..."
fi

# Next.js Web App
if [ ! -f apps/web/.env.local ]; then
    cp apps/web/.env.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local file"
else
    echo "⚠️  apps/web/.env.local file already exists, skipping..."
fi

# Astro Docs App
if [ ! -f apps/docs/.env ]; then
    cp apps/docs/.env.example apps/docs/.env
    echo "✅ Created apps/docs/.env file"
else
    echo "⚠️  apps/docs/.env file already exists, skipping..."
fi

# FastAPI Backend
if [ ! -f apps/api/.env ]; then
    cp apps/api/.env.example apps/api/.env
    echo "✅ Created apps/api/.env file"
else
    echo "⚠️  apps/api/.env file already exists, skipping..."
fi

echo ""
echo "🔧 Next steps:"
echo "1. Edit the .env files with your actual credentials"
echo ""
echo "📋 Required for basic functionality:"
echo "   • WorkOS: Get Client ID and API Key from https://dashboard.workos.com/"
echo "   • Database: Set up PostgreSQL or use Supabase"
echo "   • NextAuth Secret: Generate with 'openssl rand -base64 32'"
echo ""
echo "🔌 Optional services (comment out if not needed):"
echo "   • Email: Resend, SendGrid, or similar"
echo "   • Storage: AWS S3, Supabase, or Cloudflare R2"
echo "   • AI: OpenAI, Anthropic Claude"
echo "   • Payments: Stripe"
echo "   • Analytics: PostHog, Google Analytics"
echo "   • Monitoring: Sentry"
echo ""
echo "🚀 Start development:"
echo "   npm install"
echo "   npm run dev --workspace web"
echo ""
echo "📚 Documentation:"
echo "   • WorkOS: https://workos.com/docs/authentication"
echo "   • Template README: Check README.md for detailed setup"