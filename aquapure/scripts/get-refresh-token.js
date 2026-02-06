#!/usr/bin/env node

/**
 * OAuth2 Refresh Token Generator for Google Gmail API
 * 
 * Run this script once to obtain a refresh token.
 * Usage: node get-refresh-token.js <client_id> <client_secret> <redirect_uri>
 * 
 * Example: node get-refresh-token.js 593822719649-kds.apps.googleusercontent.com abc123 https://developers.google.com/oauthplayground
 */

const http = require('http');
const url = require('url');
const { spawn } = require('child_process');

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('Usage: node get-refresh-token.js <client_id> <client_secret> <redirect_uri>');
  console.error('\nExample:');
  console.error('  node get-refresh-token.js YOUR_CLIENT_ID YOUR_CLIENT_SECRET http://localhost:3000/oauth/callback');
  process.exit(1);
}

const CLIENT_ID = args[0];
const CLIENT_SECRET = args[1];
const REDIRECT_URI = args[2];

const SCOPES = 'https://mail.google.com/';

// Step 1: Generate authorization URL
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(SCOPES)}&access_type=offline&prompt=consent`;

console.log('\n🔓 Google OAuth2 Refresh Token Generator\n');
console.log('1. Opening Google login in your browser...\n');
console.log('   Authorization URL:');
console.log(`   ${authUrl}\n`);

// If REDIRECT_URI is http://localhost:XXXX, start a local server to capture the code
if (REDIRECT_URI.startsWith('http://localhost:')) {
  const redirectUrl = new URL(REDIRECT_URI);
  const port = redirectUrl.port || 3000;

  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const code = parsedUrl.query.code;
    const error = parsedUrl.query.error;

    if (error) {
      res.writeHead(400);
      res.end(`Error: ${error}`);
      console.error(`❌ Error from Google: ${error}`);
      process.exit(1);
    }

    if (code) {
      res.writeHead(200);
      res.end('✅ Authorization successful! You can close this window and return to the terminal.');

      // Exchange code for tokens
      exchangeCodeForToken(code);
    } else {
      res.writeHead(400);
      res.end('❌ No authorization code received');
    }
  });

  server.listen(port, () => {
    console.log(`2. Waiting for authorization callback on ${REDIRECT_URI}\n`);
    // Open browser automatically
    openBrowser(authUrl);
  });
} else {
  // Manual flow
  console.log('2. Copy the authorization URL above and paste it into your browser.');
  console.log('3. After authorizing, Google will redirect you to a URL like:');
  console.log('   ' + REDIRECT_URI + '?code=AUTH_CODE&...\n');
  console.log('4. Extract the "code" parameter and paste it here:\n');

  process.stdout.write('Paste the authorization code: ');
  process.stdin.once('data', (data) => {
    const code = data.toString().trim();
    exchangeCodeForToken(code);
  });
}

function exchangeCodeForToken(code) {
  console.log('\n📡 Exchanging authorization code for refresh token...\n');

  const options = {
    hostname: 'oauth2.googleapis.com',
    port: 443,
    path: '/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const reqData = `code=${encodeURIComponent(code)}&client_id=${encodeURIComponent(CLIENT_ID)}&client_secret=${encodeURIComponent(CLIENT_SECRET)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&grant_type=authorization_code`;

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      try {
        const tokens = JSON.parse(data);

        if (tokens.error) {
          console.error(`❌ Error: ${tokens.error_description}`);
          process.exit(1);
        }

        if (tokens.refresh_token) {
          console.log('✅ Success! Here is your refresh token:\n');
          console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`);
          console.log('📝 Add this to your .env.local file:\n');
          console.log('GOOGLE_CLIENT_ID=' + CLIENT_ID);
          console.log('GOOGLE_CLIENT_SECRET=' + CLIENT_SECRET);
          console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
          console.log('\n✨ Then restart your dev server and try the contact form!\n');
          process.exit(0);
        } else {
          console.error('⚠️  No refresh token in response. Make sure you used access_type=offline');
          console.error('Response:', tokens);
          process.exit(1);
        }
      } catch (e) {
        console.error('❌ Failed to parse response:', data);
        process.exit(1);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`❌ Request failed: ${e.message}`);
    process.exit(1);
  });

  req.write(reqData);
  req.end();
}

function openBrowser(authUrl) {
  const commands = {
    win32: 'start',
    darwin: 'open',
    linux: 'xdg-open',
  };

  const cmd = commands[process.platform];
  if (cmd) {
    spawn(cmd, [authUrl], { stdio: 'ignore' });
  }
}
