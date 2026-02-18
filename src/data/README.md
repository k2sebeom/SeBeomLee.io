# Portfolio Data Management

This directory contains all the portfolio content in JSON format. Simply edit these files to update your portfolio - changes will automatically reflect in the application during development.

## Data Files

### 📄 `aboutData.json`
Your personal introduction and bio.

```json
{
  "statement": "Brief statement about yourself",
  "bio": "Longer biography"
}
```

### 💼 `workData.json`
Your work experience history.

```json
{
  "workList": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "date": "Date Range",
      "description": "What you did",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### 🎓 `educationData.json`
Your educational background.

```json
{
  "educationList": [
    {
      "title": "University Name",
      "degrees": ["Degree 1", "Degree 2"],
      "thumbnail": "./path/to/image.png",
      "link": "https://university-website.com"
    }
  ]
}
```

### 🎮 `projectsData.json`
Your portfolio projects.

```json
{
  "featuredProjects": [
    {
      "title": "Project Name",
      "description": "What the project does",
      "thumbnail": "./path/to/image.png",
      "link": "https://project-link.com"
    }
  ],
  "projectsList": [
    // Additional projects (currently not displayed but available)
  ]
}
```

### 📞 `contactData.json`
Your contact information.

```json
{
  "contactMethods": [
    {
      "title": "Email",
      "value": "your@email.com",
      "link": "mailto:your@email.com",
      "description": "Optional description"
    }
  ]
}
```

## How to Update Content

1. **Edit JSON files** - Simply modify the JSON files in this directory
2. **Save changes** - If dev server is running (`yarn dev`), changes will hot-reload automatically
3. **Rebuild** - For production, run `yarn build` to regenerate the site

## Customization

### Layout Configuration
To adjust spacing and positioning, edit `src/data/index.ts`:

```typescript
export const LAYOUT_CONFIG = {
  SECTION_SPACING: 60,  // Space between sections (in vw)
  CARD_SPACING: 35,     // Space between cards (in vw)
  START_POSITION: 20,   // Initial offset (in vw)
  CARD_OFFSET: 15,      // Offset from section header (in vw)
};
```

### Section Metadata
To change section names or icons, edit `src/data/index.ts`:

```typescript
export const SECTION_METADATA = {
  ABOUT: { name: 'ABOUT ME', icon: '👨‍💻' },
  WORK: { name: 'WORK EXPERIENCE', icon: '💼' },
  // ... etc
};
```

## Tips

- **Keep descriptions concise** - Card space is limited, descriptions are truncated to 120 characters
- **Use relative paths** for thumbnails in the `public/` folder
- **Test links** - All cards are clickable and open the `link` field in a new tab
- **Technologies array** - For work experience, keep technology names short for better display
- **Hot reload** - During development, save JSON files to see changes instantly

## Type Safety

All data is TypeScript-typed. If you add new fields, update the types in `src/types.ts` to maintain type safety.
