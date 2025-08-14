#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if dist folder exists
    if [ -d "dist" ]; then
        echo "📁 Build files created in dist/ folder"
        echo ""
        echo "🌐 Deployment Options:"
        echo "1. Netlify: Upload dist/ folder to Netlify"
        echo "2. Vercel: Run 'vercel' command"
        echo "3. GitHub Pages: Run 'npm run deploy' (if configured)"
        echo "4. Manual: Copy dist/ contents to your web server"
        echo ""
        echo "📋 Next Steps:"
        echo "- Update meta tags in index.html with your actual URLs"
        echo "- Replace placeholder images with your own"
        echo "- Update personal information in components"
        echo "- Test the build locally with 'npm run preview'"
    else
        echo "❌ Build failed - dist folder not found"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Ready for deployment!"
