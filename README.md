# SeBeom Lee Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases SeBeom Lee's professional experience, projects, and skills in a clean, interactive interface.

🌐 **Live Site**: [sebeomlee.com](https://sebeomlee.com)

## ✨ Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive layout that works on all devices
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Code Quality**: Comprehensive ESLint and Prettier configuration
- **Fast Development**: Hot module replacement with Vite for instant updates
- **Automated Deployment**: GitHub Pages deployment with custom domain
- **Data-Driven**: Content managed through structured data files for easy updates

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/k2sebeom/SeBeomLee.io.git
cd SeBeomLee.io

# Install dependencies
yarn install

# Start development server
yarn dev
```

The development server will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `yarn dev`          | Start development server with hot reload |
| `yarn build`        | Build for production                     |
| `yarn preview`      | Preview production build locally         |
| `yarn lint`         | Run ESLint to check code quality         |
| `yarn lint:fix`     | Automatically fix ESLint issues          |
| `yarn format`       | Format code with Prettier                |
| `yarn format:check` | Check if code is properly formatted      |
| `yarn deploy`       | Deploy to GitHub Pages                   |

## 🏗️ Project Structure

```
src/
├── components/         # Reusable React components
│   ├── Header/        # Navigation and header components
│   ├── About/         # About section components
│   ├── Projects/      # Project showcase components
│   └── ...           # Other feature components
├── data/              # Content data files
│   ├── projects.ts    # Project information
│   ├── experience.ts  # Work experience data
│   ├── skills.ts      # Skills and technologies
│   └── ...           # Other content data
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── *.css             # Styling files
```

## 🎨 Design Philosophy

### Data-Driven Architecture

This portfolio follows a **data-driven approach** where:

- **Content lives in `src/data/`**: All portfolio content (projects, experience, skills) is stored as structured data
- **Components consume data**: React components import and display data rather than hard-coding content
- **Easy content updates**: Modify portfolio content by editing data files without touching component code

### Code Quality Standards

- **TypeScript**: Strict type checking for reliability and developer experience
- **ESLint**: Comprehensive linting rules including React hooks and TypeScript best practices
- **Prettier**: Consistent code formatting across the entire codebase
- **Modern React**: Functional components with hooks following current best practices

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 7.0
- **Styling**: CSS3 with modern features
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Deployment**: GitHub Pages with custom domain
- **Package Manager**: Yarn

## 🚀 Deployment

The site is automatically deployed to GitHub Pages:

- **Production URL**: [sebeomlee.com](https://sebeomlee.com)
- **Deployment**: Automated via `yarn deploy` command
- **Custom Domain**: Configured with CNAME for sebeomlee.com
- **Build Output**: Static files generated in `dist/` directory

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for details on:

- Development workflow
- Code quality standards
- Project structure guidelines
- Submission process

### Quick Contribution Checklist

Before submitting changes, ensure you run:

```bash
yarn format      # Format code
yarn lint:fix    # Fix linting issues
yarn build       # Verify build works
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**SeBeom Lee**

- Website: [sebeomlee.com](https://sebeomlee.com)
- GitHub: [@k2sebeom](https://github.com/k2sebeom)

---

Built with ❤️ using React, TypeScript, and Vite
