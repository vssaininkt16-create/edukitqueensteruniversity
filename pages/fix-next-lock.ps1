Write-Host "Killing node/next/npm..."
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Stop-Process -Name npm  -Force -ErrorAction SilentlyContinue
Stop-Process -Name next -Force -ErrorAction SilentlyContinue

Write-Host "Removing .next folder..."
Remove-Item -Recurse -Force ".\.next" -ErrorAction SilentlyContinue

Write-Host "Starting Next.js on port 3000..."
npm run dev -- -p 3000
