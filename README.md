# Gallery Music Centre

Static website for **Gallery Music Centre**, a community music school in Lower Hutt, New Zealand.

## Local Development

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploying to GitHub Pages

1. **Create a GitHub repository** (or use an existing one)
2. **Push the code** to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial site"
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to **Settings → Pages**
   - Set source to **"Deploy from a branch"**
   - Select **`main`** branch and **`/ (root)`** folder
   - Click Save
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Custom Domain (gallerymusic.org)

To use a custom domain:

1. Add a `CNAME` file containing your domain (e.g., `gallerymusic.org`)
2. In your **domain registrar**, add DNS records:
   - **Option A — CNAME record**: Point `www` to `yourusername.github.io`
   - **Option B — A records** (for apex domain): Point to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. In GitHub Pages settings, enter your custom domain and enable **"Enforce HTTPS"**

## Updating Content

| What to update          | Where to edit                                    |
|------------------------|--------------------------------------------------|
| Term dates             | `index.html` — Term Calendar section             |
| Fees                   | `classes.html` — FAQ answers, `enrol.html` — info box |
| Teacher bios           | `about.html` — Our Teachers section              |
| Committee members      | `about.html` — The Committee section             |
| Class descriptions     | `classes.html` — Instrument Cards section        |
| Testimonials           | `index.html` — Testimonials section              |
| Contact details        | Footer on all pages, `about.html` — Contact section |

Look for `<!-- TODO: ... -->` comments in the HTML for content that needs replacing with real information.

## Form Setup

The enrolment form currently uses a `mailto:` link to open the user's email client with form data pre-filled. For a better experience, consider using a form backend service:

1. **[Formspree](https://formspree.io)** — Sign up, create a form, and replace the form `action` attribute with your Formspree endpoint
2. **[Getform](https://getform.io)** — Similar setup, provides a form endpoint URL
3. Update the form's `action` attribute and set `method="POST"`
4. Remove the `enctype="text/plain"` attribute
5. Update `js/main.js` to submit via `fetch()` instead of `mailto:`

## Tech Stack

- Pure HTML, CSS, and JavaScript (no build tools or frameworks)
- Google Fonts (Inter + Nunito)
- CSS custom properties design system
- Mobile-first responsive design
