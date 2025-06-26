# Contributing to SeBeom Lee Portfolio

Thank you for your interest in contributing to this portfolio project! This guide will help you get started.

## Project Overview

This is a React + TypeScript + Vite portfolio website for SeBeom Lee, deployed to GitHub Pages at [sebeomlee.com](https://sebeomlee.com).

## Prerequisites

- Node.js (version 18 or higher recommended)
- Yarn package manager
- Git

## Getting Started

### 1. Fork and Clone

```bash
git clone https://github.com/k2sebeom/SeBeomLee.io.git
cd SeBeomLee.io
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Start Development Server

```bash
yarn dev
```

The development server will start at `http://localhost:5173`

## Development Workflow

### Code Quality Standards

This project enforces strict code quality standards:

#### Linting

- ESLint is configured with TypeScript, React hooks, and Prettier integration
- Run `yarn lint` to check for issues
- Run `yarn lint:fix` to automatically fix issues

#### Formatting

- Prettier is configured with specific style rules:
  - Semicolons: required
  - Quotes: single quotes
  - Print width: 80 characters
  - Tab width: 2 spaces
  - Trailing commas: ES5 style
- Run `yarn format` to format all files
- Run `yarn format:check` to check formatting

#### TypeScript

- Strict TypeScript configuration is enabled
- Type-aware linting rules are enforced
- Consistent type imports are required

### Before Submitting Changes

**Always run these commands before committing:**

```bash
yarn format
yarn lint:fix
yarn build
```

This ensures:

1. Code is properly formatted
2. No linting errors exist
3. Project builds successfully

### Building for Production

```bash
yarn build
```

This will:

1. Run TypeScript type checking
2. Build the project with Vite
3. Output files to the `dist/` directory

### Preview Production Build

```bash
yarn preview
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/          # Static data files
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
├── App.css        # Main application styles
└── index.css      # Global styles
```

## Coding Guidelines

### Data-Driven Architecture

This project follows a data-driven approach to content management:

- **Content Data Location**: All portfolio content data (projects, experience, skills, etc.) should be stored in the `src/data/` directory
- **Component Implementation**: Components in `src/components/` should reference and consume data from `src/data/` instead of hard-coding content
- **Separation of Concerns**: Keep content data separate from component logic to maintain flexibility and ease of updates

When adding new content or modifying existing content:

1. Update the relevant data files in `src/data/`
2. Ensure components import and use this data rather than containing hard-coded strings
3. This approach allows for easy content updates without touching component code

## Code Review Process

All contributions will be reviewed for:

- Code quality and adherence to project standards
- Functionality and performance
- TypeScript type safety
- Responsive design compatibility
- Overall project consistency

Thank you for contributing to make this portfolio better!
