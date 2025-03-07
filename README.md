# React Template

This template provides a minimal setup to get React working with Vite, Vitest, MUI, Bio, and TypeScript.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Vitest**: A Vite-native unit test framework.
- **MUI**: A popular React UI framework.
- **Bio**: A tool for identifying and fixing linting issues.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nhope123/react-template.git
   cd react-template
   ```

2. Install dependencies:
   ```sh
    npm install
    # or
    yarn install
   ```

### Scripts

```sh
 "scripts": {
   "dev": "vite", // Starts the development server
   "build": "tsc -b && vite build", // Builds the project
   "preview": "vite preview", // Previews the built project
   "format": "biome check --write ./", // Formats, lint and sort imports in the codebase
   "test": "vitest --ui" // Runs the tests
 }
```

### Project Structure

```sh
  react-template/
   ├── src/
   │   ├── assets/ // Static assets (images, fonts, etc.)
   │   ├── components/ // React components
   │   ├── hooks/ // Custom hooks
   │   ├── test/ // Test setup and test files directory
   │   └── (Source code directory)
   └── public/
       └── (public assets files)
```

### Configuration

- **Biome**: Configured in [biome.json](biome.json).
- **TypeScript**: Configured in [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), and [tsconfig.node.json](tsconfig.node.json).
- **Vite**: Configured in [vite.config.ts](vite.config.ts).

### License

This project is licensed under the [MIT](LICENSE) License.
