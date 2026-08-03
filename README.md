# Deploying your site to GitHub Pages

Your GitHub username is **Antreas02**, so this will go live at:
`https://antreas02.github.io`

## Steps

1. Go to https://github.com/new
2. Repository name must be **exactly**: `Antreas02.github.io`
   (GitHub only auto-publishes a repo named `<username>.github.io`)
3. Set it to **Public**, and create it (don't add a README from the GitHub UI).
4. On your computer, in the folder containing `index.html`, run:

   ```bash
   git init
   git add index.html
   git commit -m "Add personal site"
   git branch -M main
   git remote add origin https://github.com/Antreas02/Antreas02.github.io.git
   git push -u origin main
   ```

5. Wait 1–2 minutes, then visit `https://antreas02.github.io` — it should be live.
6. Any time you want to update the site, edit `index.html` and run:

   ```bash
   git add index.html
   git commit -m "Update site"
   git push
   ```

## Notes

- No build step, no server, no dependencies — it's a single static HTML file with
  everything (CSS + JS) inline, so GitHub Pages can serve it as-is.
- The only external call is to Google Fonts (for IBM Plex Sans/Mono). If you'd
  rather have zero external requests, tell me and I'll swap in system fonts.
- Your phone number from the CV was left off the public page on purpose, so it
  doesn't get scraped by spam bots — email + GitHub are the contact points. Say
  the word if you'd like it added anyway.
- Graduation is listed as "Jun 2026" straight from your CV. Since that's already
  passed, you may want to change it to "Graduated Jun 2026" — just say so and
  I'll update it.
