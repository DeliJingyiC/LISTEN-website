# Setup Guide: Private Website Repository

## Step 1: Create Private GitHub Repository

1. Go to GitHub: https://github.com/new
2. **Repository name**: `LISTEN-website` (or any name you prefer)
3. **Description**: "Private repository for LISTEN benchmark website"
4. **Visibility**: ⚠️ **Select "Private"**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /users/PAS2062/delijingyic/project/LISTEN-website

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/LISTEN-website.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository settings: `https://github.com/YOUR_USERNAME/LISTEN-website/settings/pages`
2. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
3. Click "Save"
4. GitHub will build your site (takes 1-2 minutes)

## Step 4: Configure Custom Domain (Optional)

If you want to keep using `delijingyic.github.io/LISTEN`:

1. In the Pages settings, under "Custom domain", enter: `delijingyic.github.io`
2. Or keep the default: `YOUR_USERNAME.github.io/LISTEN-website`

## Step 5: Update Public Code Repository

Now update the public LISTEN code repository to remove the docs folder:

```bash
cd /users/PAS2062/delijingyic/project/LISTEN

# Remove the docs folder
git rm -r docs/

# Update README to point to the website
# (Edit README.md to update the website link if needed)

# Commit the changes
git commit -m "Remove website files (moved to private repository)"

# Push to GitHub
git push
```

## Step 6: Update Links

Make sure these links are correct in your public README:

- Website: `https://delijingyic.github.io/LISTEN/` (or your custom domain)
- Code: `https://github.com/DeliJingyiC/LISTEN`

## Benefits of This Setup

✅ **Separate concerns**: Code repository stays clean and focused on research code
✅ **Prevent forks from getting website**: Forks won't include your website files
✅ **Private website repo**: You can control who sees the website source
✅ **Independent updates**: Update website without affecting code repo
✅ **Same URL**: Website URL remains the same for users

## Maintenance

### To update the website:

```bash
cd /users/PAS2062/delijingyic/project/LISTEN-website

# Make your changes to index.html, game.html, etc.

# Commit and push
git add .
git commit -m "Update website"
git push
```

GitHub Pages will automatically rebuild (1-2 minutes).

### To update the code:

```bash
cd /users/PAS2062/delijingyic/project/LISTEN

# Make your changes to scripts, etc.

# Commit and push
git add .
git commit -m "Update code"
git push
```

## Troubleshooting

**Q: Website not updating after push?**
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check the "Actions" tab in your repository
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Q: Want to make website public later?**
- Go to repository Settings → General → Danger Zone
- Click "Change visibility" → "Make public"

**Q: Need to share website source with collaborators?**
- Go to repository Settings → Collaborators
- Add collaborators by username


