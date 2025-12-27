#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 HireScope Setup Script');
console.log('========================\n');

// Check if we're in the right directory
if (!fs.existsSync('backend') || !fs.existsSync('src')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

console.log('📦 Installing backend dependencies...');
try {
  process.chdir('backend');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Backend dependencies installed\n');
} catch (error) {
  console.error('❌ Failed to install backend dependencies');
  process.exit(1);
}

// Go back to root
process.chdir('..');

console.log('📦 Installing frontend dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Frontend dependencies installed\n');
} catch (error) {
  console.error('❌ Failed to install frontend dependencies');
  process.exit(1);
}

// Check if .env exists in backend
const envPath = path.join('backend', '.env');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating backend .env file...');
  const envExamplePath = path.join('backend', '.env.example');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from .env.example');
    console.log('⚠️  Please edit backend/.env with your configuration\n');
  }
}

console.log('🎉 Setup complete!\n');
console.log('📋 Next steps:');
console.log('1. Configure backend/.env with your settings:');
console.log('   - MongoDB URI');
console.log('   - JWT secrets');
console.log('   - OpenAI API key');
console.log('2. Start MongoDB');
console.log('3. Run the development servers:\n');
console.log('   Backend:  cd backend && npm run dev');
console.log('   Frontend: npm run dev\n');
console.log('📖 For detailed instructions, see SETUP_GUIDE.md');