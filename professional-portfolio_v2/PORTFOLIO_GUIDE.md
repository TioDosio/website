# Professional Portfolio - Complete Guide

## How It Works

Your portfolio is a **static React website** built with modern web technologies. Here's the tech stack:

- **React 19** - UI framework for building interactive components
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript for better code quality
- **shadcn/ui** - Pre-built accessible UI components

### Architecture

The portfolio is organized as follows:

```
professional-portfolio/
├── client/                 # Frontend code (React app)
│   ├── public/            # Static assets (images, favicon)
│   │   └── images/        # Project images
│   ├── src/
│   │   ├── pages/         # Page components (Home.tsx)
│   │   ├── components/    # Reusable UI components
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles and theme
│   └── index.html         # HTML template
├── package.json           # Project dependencies
└── server/                # Server configuration (minimal)
```

### How the Homepage Works

The `Home.tsx` page contains:

1. **Navigation Bar** - Sticky header with smooth scroll navigation to different sections
2. **Hero Section** - Your introduction with call-to-action buttons
3. **Projects Grid** - Masonry layout displaying your projects with:
   - Project title and description
   - Date and view count
   - Dashed green borders (neon aesthetic)
   - Small green badge in the top-right corner
   - "Read more →" link
4. **Contact Section** - Email, GitHub, and LinkedIn contact options
5. **Footer** - Copyright information

### Styling System

The design uses **CSS variables** defined in `client/src/index.css`:

- **Primary color**: `#00ff00` (neon green)
- **Background**: `#0a0a0a` (near black)
- **Text**: `#e5e5e5` (light gray)
- **Accent borders**: Dashed green lines

The theme is automatically applied to all components through Tailwind CSS utilities.

---

## Testing Locally

### Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (package manager) - Install with: `npm install -g pnpm`

### Step 1: Clone or Download the Project

Download the project files and navigate to the folder:

```bash
cd professional-portfolio
```

### Step 2: Install Dependencies

Install all required packages:

```bash
pnpm install
```

### Step 3: Start the Development Server

Run the development server:

```bash
pnpm dev
```

You should see output like:

```
➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

Open your browser and visit **http://localhost:3000/** to see your portfolio.

### Step 4: Make Changes and See Them Live

The development server automatically reloads when you make changes:

- **Edit `client/src/pages/Home.tsx`** to change content, layout, or add new sections
- **Edit `client/src/index.css`** to change colors, fonts, or global styles
- **Add images to `client/public/images/`** and reference them in your code

Changes appear instantly in your browser!

### Step 5: Stop the Server

Press `Ctrl+C` in your terminal to stop the development server.

---

## Deploying to Vercel

Vercel is the easiest way to deploy your portfolio. It's free, fast, and integrates seamlessly with GitHub.

### Option 1: Deploy from GitHub (Recommended)

#### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click **New repository**
3. Name it `professional-portfolio`
4. Click **Create repository**

#### Step 2: Push Your Code to GitHub

In your terminal, navigate to your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: professional portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/professional-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Select your `professional-portfolio` repository
4. Vercel will auto-detect it's a Vite project
5. Click **Deploy**

Your portfolio is now live! Vercel will give you a URL like `https://professional-portfolio-abc123.vercel.app/`

**Auto-deployment**: Every time you push changes to GitHub, Vercel automatically redeploys your site.

### Option 2: Use Manus Built-in Hosting

Manus provides built-in hosting with custom domain support:

1. In the Manus UI, click the **Publish** button (top-right)
2. Your portfolio is instantly deployed to a Manus domain
3. You can bind a custom domain in the **Settings → Domains** panel

---

## Customizing Your Portfolio

### Change Project Information

Edit `client/src/pages/Home.tsx` and modify the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What this project does...",
    date: "Jan 1, 2024",
    views: "1.2K",
    link: "https://your-project.com",
    github: "https://github.com/username/project",
    size: "large", // "small", "medium", or "large"
  },
  // Add more projects...
];
```

### Change Colors and Theme

Edit `client/src/index.css` and modify the `:root` CSS variables:

```css
:root {
  --primary: #00ff00;        /* Neon green */
  --background: #0a0a0a;     /* Near black */
  --foreground: #e5e5e5;     /* Light gray */
  --card: #1a1a1a;           /* Dark card */
  /* ... other variables ... */
}
```

### Add Your Own Images

1. Save images to `client/public/images/`
2. Reference them in your code:

```tsx
<img src="/images/my-image.png" alt="Description" />
```

### Update Contact Information

In `Home.tsx`, find the contact section and update:

```tsx
<a href="mailto:your.email@example.com">Email Me</a>
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
```

---

## Building for Production

When you're ready to deploy, create an optimized production build:

```bash
pnpm build
```

This creates a `dist/` folder with optimized, minified code. This is what gets deployed to Vercel or Manus.

---

## Troubleshooting

### Port 3000 Already in Use

If you get an error that port 3000 is in use, you can specify a different port:

```bash
pnpm dev -- --port 3001
```

Then visit `http://localhost:3001/`

### Changes Not Showing Up

1. Make sure you saved the file
2. Check that the dev server is still running
3. Try a hard refresh in your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Build Errors

If you see TypeScript or build errors:

```bash
pnpm install  # Reinstall dependencies
pnpm dev      # Try running again
```

### Deployment Issues on Vercel

- Make sure your GitHub repository is public or you've granted Vercel access
- Check that `package.json` and `client/` folder are in the root directory
- Vercel should auto-detect Vite; if not, set build command to `pnpm build` and output directory to `dist`

---

## Project Structure Explained

### `client/src/pages/Home.tsx`

This is the main page component. It contains:

- **Navigation** - Links to scroll to different sections
- **Hero Section** - Your introduction
- **Projects Array** - List of all your projects with metadata
- **Projects Grid** - Renders projects in a masonry layout
- **Contact Section** - Email, GitHub, LinkedIn links
- **Footer** - Copyright info

To customize, edit the `projects` array and update text content.

### `client/src/index.css`

This file contains:

- **CSS Variables** - Colors, spacing, fonts defined here
- **Global Styles** - Applied to all elements
- **Custom Components** - `.project-card`, `.card-hover`, etc.
- **Animations** - Fade-in effects for elements

Change colors by updating the CSS variables in `:root {}`.

### `client/index.html`

The HTML template that loads your React app. You can:

- Change the page title
- Add meta tags for SEO
- Add Google Fonts or other stylesheets

### `package.json`

Lists all dependencies and scripts:

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build locally

---

## Next Steps

1. **Customize your projects** - Update project titles, descriptions, and links with your actual work
2. **Add your contact info** - Update email, GitHub, and LinkedIn URLs
3. **Deploy to Vercel** - Follow the GitHub deployment steps above
4. **Buy a custom domain** - Use Vercel's domain marketplace or bring your own
5. **Share your portfolio** - Send the link to recruiters and potential employers!

---

## Need Help?

- **Vite Documentation**: https://vitejs.dev/
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Vercel Deployment**: https://vercel.com/docs
- **GitHub Guides**: https://guides.github.com/
