# Spotlight : Modern Portfolio Website

A sophisticated portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS, featuring a blog, project showcase, and dynamic content management.

## 🚀 Features

### Core Functionality
- **Blog Platform**: MDX-based blogging with syntax highlighting
- **Project Showcase**: Portfolio section with detailed project descriptions
- **About & Uses Pages**: Personal information and tech stack details
- **RSS Feed**: Automated feed.xml generation
- **Dark Mode**: System-based and manual dark mode switching
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Features
- **App Router**: Leverages Next.js 13+ app directory structure
- **TypeScript**: Full type safety throughout the application
- **MDX Integration**: Advanced markdown processing for blog posts
- **Image Optimization**: Automatic image optimization via Next.js Image component
- **SEO Optimization**: Built-in SEO best practices
- **Performance**: Optimized asset loading and component rendering

## 📁 Project Structure

```bash
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   │   └── page.tsx       # About page component
│   ├── articles/          # Blog articles section
│   │   ├── [article]/     # Dynamic article routes
│   │   │   └── page.mdx   # Article content
│   │   └── page.tsx       # Articles list page
│   ├── projects/          # Projects section
│   │   └── page.tsx       # Projects list page
│   ├── feed.xml/          # RSS feed
│   │   └── route.ts       # Feed generator
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
│
├── components/            # Reusable components
│   ├── Layout/           # Layout components
│   │   ├── ArticleLayout.tsx  # Blog post layout
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── UI/               # UI components
│   │   ├── Button.tsx    # Reusable button
│   │   ├── Card.tsx      # Card component
│   │   └── Container.tsx # Container wrapper
│   └── SocialIcons.tsx   # Social media icons
│
├── lib/                  # Utility functions
│   ├── articles.ts       # Article management
│   └── formatDate.ts     # Date formatting
│
├── styles/              # Styling
│   ├── prism.css       # Code highlighting
│   └── tailwind.css    # Tailwind imports
│
└── images/             # Static assets
    ├── logos/         # Logo images
    └── photos/        # Content images
```

## 🛠️ Technology Stack

### Core
- **Next.js 13+**: React framework with app directory
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first styling
- **MDX**: Markdown with JSX support

### Additional Libraries
- **@tailwindcss/typography**: Blog post styling
- **@tailwindcss/forms**: Form element styling
- **clsx**: Conditional class names
- **Prism.js**: Code syntax highlighting

## 📥 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create environment variables
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
# or
yarn dev
```

## 🔧 Configuration

### Blog Posts
Add new blog posts in `src/app/articles/` as MDX files:
```markdown
---
title: "Article Title"
date: "2024-01-19"
description: "Article description"
---

Content goes here...
```

### Projects
Add new projects in `src/app/projects/page.tsx`:
```typescript
const projects = [
  {
    name: "Project Name",
    description: "Project description",
    link: {
      href: "https://project-url.com",
      label: "project.com"
    }
  }
  // ...
]
```

### Styling
Customize Tailwind configuration in `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      // Custom configurations
    }
  }
}
```

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy

## 📝 Content Management

### Adding Blog Posts
1. Create new MDX file in `src/app/articles/`
2. Add frontmatter with title, date, description
3. Write content using markdown and MDX components
4. Images go in the article's directory

### Managing Projects
1. Update `projects/page.tsx`
2. Add project images to `src/images/`
3. Configure project cards with description and links

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

This project is licensed under the MIT License.

## 📬 Contact

For questions or suggestions, please open an issue or reach out through the contact form on the website.