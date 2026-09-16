# 1-Click Runner for MNC Code Hub
Write-Host "Starting MNC Code Hub..." -ForegroundColor Cyan

# Open the website in your default browser
Start-Process "http://localhost:3000"

# Start the local server
python -m http.server 3000
