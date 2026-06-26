#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Charlottetown Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If charlottetownshoreexcursions.com still shows 404:"
echo "  Workers & Pages → charlottetown-shore-excursions → Settings → Domains"
echo "  → Add charlottetownshoreexcursions.com and www.charlottetownshoreexcursions.com"
