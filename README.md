# ASC Consulting – Website

A professional, fully responsive financial advisory website for **ASC Consulting**.

## Structure

```
asc-consulting/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, animations, scroll effects
└── README.md
```

## Features

- Sticky navigation with mobile hamburger menu
- Hero section with animated metrics card
- Trust/credentials strip (SEBI, CFA, ISO, ICAI)
- Services grid (6 services)
- Stats band (dark background)
- Why ASC section
- Client testimonials
- CTA / Contact section
- Responsive footer with links
- Fade-up scroll animations
- Fully responsive (mobile, tablet, desktop)
- No external JS dependencies — pure HTML, CSS, JS

## Customisation checklist

Before going live, update the following in `index.html`:

| Item | Where to find it |
|------|-----------------|
| Email address | `advisory@ascconsulting.in` — CTA section & footer |
| Phone number | `+91 22 4000 0000` — CTA section |
| Office address | `Nariman Point, Mumbai` — CTA section |
| SEBI registration number | Footer bottom |
| Assets under advisory | Hero card & stats band |
| Years of experience | Hero card & stats band |
| Number of engagements | Hero card & stats band |
| Client testimonials | Testimonials section (names, roles, quotes) |

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Fonts used

- **Playfair Display** (display / headings) — Google Fonts
- **DM Sans** (body) — Google Fonts

Both are loaded via Google Fonts CDN in `<head>` — no installation needed.

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Graceful fallback for browsers without `IntersectionObserver`.
