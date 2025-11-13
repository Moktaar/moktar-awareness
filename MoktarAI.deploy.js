const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 MoktarAI Deployment Ritual Started...');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('🧹 Cleaning previous build...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Build project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Deploy to Netlify (if netlify-cli installed)
  console.log('🌍 Deploying to Netlify...');
  execSync('npx netlify deploy --prod', { stdio: 'inherit' });

  console.log('✅ Deployment complete. MoktarAI is now live and mythic.');
} catch (err) {
  console.error('❌ Deployment failed:', err.message);
}