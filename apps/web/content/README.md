# Content Management

This directory contains all the editable content for the AUSPIN Ventures website in Markdown format.

## How to Edit Content

Simply open any `.md` file in this directory and edit the text. The changes will automatically appear on the website after you commit and deploy.

## File Structure

- **hero.md** - Homepage hero section (main headline and tagline)
- **problem.md** - The Enterprise AI Death Spiral section
- **services.md** - How We Help / Services section
- **method.md** - Our Methodology / Sprints section
- **outcomes.md** - Board-Ready Deliverables section
- **team.md** - Team member bios and information
- **contact.md** - Contact form section

## Editing Guidelines

### Frontmatter (Top Section)

The section between `---` markers contains metadata. Don't change the structure, only the values:

```markdown
---
section: "team"
title: "The Practitioner Advantage"
---
```

### Content (Below Frontmatter)

Edit the text freely. Use markdown formatting:

- `#` for main headings
- `##` for section headings
- `###` for sub-headings
- `**bold text**` for bold
- Regular paragraphs for body text

### Team Members

Each team member follows this format:

```markdown
### Name Here

**Role:** Job Title
**LinkedIn:** https://linkedin.com/...
**Image:** /team/photo.jpg
**Order:** 1

Bio text goes here...
```

### Services

Each service follows this format:

```markdown
## Service Name

🔧

Description text goes here...
```

## After Editing

1. Save the file
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push to deploy: `git push origin main`

The website will automatically rebuild with your changes!
