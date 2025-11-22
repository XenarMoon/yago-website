#!/usr/bin/env node

/**
 * Demo Code Generator
 * Generates a demo access code valid for 2 hours
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate random demo code
function generateCode() {
  const prefix = 'DEMO';
  const part1 = crypto.randomBytes(2).toString('hex').toUpperCase();
  const part2 = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `${prefix}-${part1}-${part2}`;
}

// Calculate expiration (2 hours from now)
function getExpiration(hours = 2) {
  const now = new Date();
  const expiration = new Date(now.getTime() + hours * 60 * 60 * 1000);
  return expiration.toISOString();
}

// Load existing codes
function loadCodes() {
  const codesFile = path.join(__dirname, '..', 'data', 'demo-codes.json');

  try {
    if (fs.existsSync(codesFile)) {
      const data = fs.readFileSync(codesFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading codes:', error.message);
  }

  return { codes: [] };
}

// Save codes
function saveCodes(data) {
  const dataDir = path.join(__dirname, '..', 'data');
  const codesFile = path.join(dataDir, 'demo-codes.json');

  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(codesFile, JSON.stringify(data, null, 2));
}

// Clean up expired codes
function cleanupExpiredCodes(data) {
  const now = new Date();
  data.codes = data.codes.filter(item => new Date(item.expiresAt) > now);
  return data;
}

// Main function
function main() {
  const args = process.argv.slice(2);
  const hoursValid = args[0] ? parseInt(args[0]) : 2;

  // Generate new code
  const code = generateCode();
  const expiresAt = getExpiration(hoursValid);
  const createdAt = new Date().toISOString();

  // Load existing codes and clean up expired ones
  let data = loadCodes();
  data = cleanupExpiredCodes(data);

  // Add new code
  const newCode = {
    code,
    createdAt,
    expiresAt,
    used: false,
    usedAt: null
  };

  data.codes.push(newCode);

  // Save to file
  saveCodes(data);

  // Calculate expiration time
  const expirationDate = new Date(expiresAt);
  const now = new Date();
  const minutesValid = Math.round((expirationDate - now) / (1000 * 60));

  // Output
  console.log('\n╔═══════════════════════════════════════════════╗');
  console.log('║       DEMO ACCESS CODE GENERATED              ║');
  console.log('╚═══════════════════════════════════════════════╝\n');
  console.log(`  Code:       ${code}`);
  console.log(`  Valid for:  ${hoursValid} hours (${minutesValid} minutes)`);
  console.log(`  Expires:    ${expirationDate.toLocaleString()}`);
  console.log(`  Created:    ${new Date(createdAt).toLocaleString()}`);
  console.log(`\n  Active codes: ${data.codes.length}`);
  console.log('\n───────────────────────────────────────────────\n');
  console.log(`  Share this code with your user:\n`);
  console.log(`  ┌─────────────────────┐`);
  console.log(`  │  ${code}  │`);
  console.log(`  └─────────────────────┘\n`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateCode, getExpiration, loadCodes, saveCodes, cleanupExpiredCodes };
