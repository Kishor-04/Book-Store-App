# Setup Instructions for New Features

Write-Host "🚀 BookStore App - Setup New Features" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install dependencies
Write-Host "📦 Step 1: Installing new dependencies..." -ForegroundColor Yellow
npm install multer razorpay

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies. Please run 'npm install' manually." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Seed categories
Write-Host "🌱 Step 2: Seeding categories..." -ForegroundColor Yellow
node seedCategories.js

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Categories seeded successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to seed categories. Make sure MongoDB is running." -ForegroundColor Red
}

Write-Host ""

# Step 3: Reminder for Razorpay
Write-Host "🔑 Step 3: Configure Razorpay" -ForegroundColor Yellow
Write-Host ""
Write-Host "To enable payment gateway:" -ForegroundColor White
Write-Host "1. Sign up at: https://razorpay.com/" -ForegroundColor White
Write-Host "2. Get your API keys from Dashboard → Settings → API Keys" -ForegroundColor White
Write-Host "3. Add to your .env file:" -ForegroundColor White
Write-Host "   RAZORPAY_KEY_ID=your_key_id" -ForegroundColor Gray
Write-Host "   RAZORPAY_KEY_SECRET=your_key_secret" -ForegroundColor Gray
Write-Host ""

# Step 4: Done
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 What's New:" -ForegroundColor Cyan
Write-Host "  ✓ Book image upload functionality" -ForegroundColor White
Write-Host "  ✓ Full user CRUD for admin" -ForegroundColor White
Write-Host "  ✓ Razorpay payment gateway" -ForegroundColor White
Write-Host "  ✓ Payment management dashboard" -ForegroundColor White
Write-Host "  ✓ Categories system" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Start the server with: npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "📖 For more details, see UPDATES.md" -ForegroundColor Gray
