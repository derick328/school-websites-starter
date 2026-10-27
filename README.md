# School Websites Starter — 3 presets, 1 reusable Next.js codebase

A modern, accessible, mobile-responsive school website starter with a **green + yellow** design identity. Choose among:

1. `kindergarten-primary` — Kindergarten and primary school (**Little Oaks Academy** demo).
2. `secondary` — Secondary school (**Summit Ridge Secondary** demo).
3. `combined` — Primary and secondary school (**Greenstone Integrated School** demo).

> The school names, email addresses, phone numbers, admissions information, school statements and editorial content are *fictional placeholders*. Replace these before deploying a real school's website.

## Run locally

Requires **Node.js 24.x** and npm (matching the Vercel runtime). If you use nvm, run `nvm use` first.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Preview all three school types using the top-of-page selector, or open directly:

- Kindergarten + Primary: `http://localhost:3000/?school=kindergarten-primary`
- Secondary: `http://localhost:3000/?school=secondary`
- Primary + Secondary: `http://localhost:3000/?school=combined`

All internal pages and navigation preserve the currently selected demo school.

## Deploy to Vercel

The project is configured for Vercel's native Next.js hosting. `vercel.json` selects Next.js, installs the locked dependencies with `npm ci`, and runs `npm run build`. `package.json` pins Node.js to 24.x.

1. Push this project to a GitHub, GitLab, or Bitbucket repository, including `package-lock.json` and `vercel.json`.
2. In the Vercel dashboard, choose **Add New → Project** and import the repository.
3. Set **Root Directory** to the folder containing `package.json` (the repository root if you upload this folder's contents). Keep the **Next.js** framework preset and the default **Output Directory**; the build and install commands come from `vercel.json`.
4. For the three-school demo, no environment variables are required. For a single school, add these under **Environment Variables** before deploying:

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_DEMO_MODE` | `false` |
   | `NEXT_PUBLIC_SCHOOL_PRESET` | `kindergarten-primary`, `secondary`, or `combined` (choose one) |

   Apply them to Production and, if desired, Preview. These public settings are embedded during the build, so redeploy after changing them. `.env.local` stays on your computer and is not uploaded.
5. Click **Deploy**, then open the generated URL. Check the home page, `/admissions`, and `/contact`.

To deploy directly from this folder without creating a Git repository, run `npx vercel` and follow its login/project prompts for a preview deployment. Run `npx vercel --prod` when ready to publish to production; configure any single-school environment variables in the Vercel project first.

To verify the production build locally:

```bash
npm run build
npm run lint:types
npm start
```

This application uses server-rendered routes to select a school from the URL. Keep the native Next.js deployment; do not set a static export or an `out` output directory. No database or API keys are needed for the existing site. The enquiry form opens an email draft, as described below.

Reference: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) and [supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Turn the starter into a real school's independent website

1. Make a new repository using GitHub **Use this template**, or duplicate the project.
2. Copy `.env.example` to `.env.local`.
3. Set:

   ```dotenv
   NEXT_PUBLIC_DEMO_MODE=false
   NEXT_PUBLIC_SCHOOL_PRESET=secondary
   ```

   Set the second value to any of the three IDs.
4. Edit `data/schools.ts` for the school's name, motto, programme descriptions, contact information, and branding colors.
5. Replace illustration SVGs under `public/illustrations/` with approved real photographs or custom artwork. If using photos of children, confirm appropriate permissions.
6. Check **all content**: curriculum levels, fees, admissions processes, principal's message, term dates and regulatory/official claims.
7. Deploy the repository to Vercel. Set the same two environment variables in **Project → Settings → Environment Variables** and redeploy.

The demo-mode switcher is hidden with `NEXT_PUBLIC_DEMO_MODE=false`, and direct home, About, Academics, Admissions, School Life, News, Gallery, and Contact pages use the fixed school preset.

## Pages included

- `/` — Home
- `/about` — About Us
- `/academics` — Academics
- `/admissions` — Admissions
- `/life` — School Life
- `/news` — News & Stories
- `/gallery` — Gallery
- `/contact` — Contact + basic enquiry composer

**Important form behavior:** The Contact form opens a `mailto:` draft in the visitor's installed email application. It **does not** save messages, submit to a database, or send emails in the background. For a live school, connect a verified email/API service with spam protection, privacy notices, and data retention rules.

## Project structure

```
app/
  layout.tsx
  page.tsx
  [section]/page.tsx
  globals.css
components/
  Icon.tsx
  SchoolSite.tsx
  EnquiryForm.tsx
data/
  schools.ts
public/
  illustrations/
```

### Design changes

`data/schools.ts` controls most content and school-specific colors. Shared responsive styles live in `app/globals.css`. Each school gets its own homepage hero treatment via `.site--kindergarten-primary`, `.site--secondary` and `.site--combined`.

A template repository is copied **once**. Updates to this original template **do not automatically propagate** into a client's copy. If you have many client schools, consider moving stable shared components into a versioned npm package or a centrally managed monorepo, with separate per-school configs and deployments.

## Production checklist

- [ ] Replace demo school names and example contact information.
- [ ] Use real, approved school logo and photography.
- [ ] Confirm offered levels, subjects, admission details, fees and dates with the school.
- [ ] Set `NEXT_PUBLIC_DEMO_MODE=false`.
- [ ] Replace sample news and gallery placeholders.
- [ ] Connect a real admissions/contact submission service or intentionally use email links.
- [ ] Add proper consent and privacy policy before collecting children's or parents' data.
- [ ] Update title/description, domain, favicons, sitemap and social sharing artwork for the actual school.
- [ ] Run `npm run build` and inspect mobile / tablet / desktop.
- [ ] Set up custom domain with the school and test email delivery.

## License / ownership

Starter code is original demonstration code. The included custom SVG illustrations were generated specifically for this starter and may be adapted. No third-party school logos or other websites' code are included.
