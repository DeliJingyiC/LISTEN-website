# Deployment Instructions

## Current Status
✅ Website files are ready in this repository  
✅ Code repository (LISTEN) no longer contains docs folder  

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

**Option A: Public Repository** (Recommended if you want the website source public)
```
Repository name: LISTEN-website
Description: LISTEN Benchmark Website
Visibility: Public
```

**Option B: Private Repository** (If you want to keep website source private)
```
Repository name: LISTEN-website  
Description: LISTEN Benchmark Website
Visibility: Private
```

### Step 2: Push to GitHub

```bash
cd /users/PAS2062/delijingyic/project/LISTEN-website

# Add remote (use your GitHub username)
git remote add origin https://github.com/DeliJingyiC/LISTEN-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to: `https://github.com/DeliJingyiC/LISTEN-website/settings/pages`
2. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
3. Click "Save"
4. Wait 2-3 minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
- **https://delijingyic.github.io/LISTEN-website/**

Or if you want a custom domain/path, you can configure it in the Pages settings.

### Step 5: Update README Links

Update the main LISTEN repository README to point to the new website URL:

```markdown
🌐 **Website**: https://delijingyic.github.io/LISTEN-website/
📦 **Dataset**: https://huggingface.co/datasets/delijingyic/VibeCheck
💻 **Code**: https://github.com/DeliJingyiC/LISTEN
```

## Benefits of This Setup

✅ **Separate repositories**: Code and website are completely independent  
✅ **Clean code repo**: Forks only get research code, no website files  
✅ **Independent updates**: Update website without touching code repo  
✅ **Flexible visibility**: Can make website repo private if desired  
✅ **Same user experience**: Users access via GitHub Pages URL  

## Repository Structure

```
LISTEN/                          (Public - Code Only)
├── scripts/                     # Evaluation scripts
├── README.md                    # Points to website
├── requirements.txt
└── (no docs folder)

LISTEN-website/                  (Public or Private - Website Only)
├── index.html                   # Main page with word animation
├── styles.css                   # Clean cream/navy design
├── script.js                    # Leaderboard
├── game.html                    # Interactive challenge
├── *.png, *.pdf                 # Assets
└── README.md                    # Website documentation
```

## Updating the Website

After initial setup, to update the website:

```bash
cd /users/PAS2062/delijingyic/project/LISTEN-website

# Make your changes to index.html, styles.css, etc.

git add .
git commit -m "Update website"
git push
```

GitHub Pages will automatically rebuild in 2-3 minutes.

## Troubleshooting

**Q: Website not showing after push?**
- Wait 2-3 minutes for GitHub Pages to build
- Check Actions tab for build status
- Clear browser cache (Ctrl+Shift+R)

**Q: Want to use custom domain?**
- In Pages settings, add custom domain
- Update DNS records as instructed by GitHub

**Q: Want to make website private later?**
- Go to Settings → General → Danger Zone
- Click "Change visibility"
- Note: GitHub Pages for private repos requires GitHub Pro

**Q: 404 error on game.html?**
- Make sure all files were pushed
- Check that file names are exactly: `game.html`, `index.html`, etc.





