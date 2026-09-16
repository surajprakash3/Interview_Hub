@echo off
echo Starting MNC Code Hub...
start http://localhost:3000
python -m http.server 3000
