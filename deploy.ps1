# Step 1: Build JSX app
npm run build

# Step 2: Rar build root-level
Copy-Item -Path .\dist\index.html -Destination .\index.html -Force
Copy-Item -Path .\dist\assets\* -Destination .\assets\ -Force

# Step 3: Git commit + push
git add .
git commit -m "Mythic auto-deploy: JSX awareness academy - full render"
git push origin gh-pages --force