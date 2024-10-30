
# Amani Frontend

This repository contains the frontend code for the **Amani** project. It is a React-based application with TypeScript, TailwindCSS, and Storybook integration. This project focuses on providing a responsive and component-based UI, along with error handling and other essential configurations for a smooth user experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To set up the project locally, clone the repository and install the dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amani-frontend.git
   cd amani-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

## Project Structure

The repository structure is as follows:

```
amani-frontend/
├── .idea/                    # IDE settings (local)
├── .storybook/               # Storybook configuration files
├── build/                    # Build artifacts
├── public/                   # Public assets like images and index.html
├── src/                      # Main source code for the application
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
├── git_push.sh               # Script for pushing changes to the repository
├── package.json              # NPM package configuration
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
```

### Key Folders

- **`.storybook/`**: Contains the configuration for Storybook, allowing isolated development and testing of components.
- **`build/`**: Holds production build artifacts.
- **`public/`**: Contains static files and the main HTML file.
- **`src/`**: Holds the main application code.

## Scripts

The following scripts are available in `package.json`:

- `npm start` - Starts the development server.
- `npm run build` - Builds the project for production.
- `npm run storybook` - Launches Storybook for isolated component development.
- `npm test` - Runs the test suite.

## Configuration

- **Error Handling**: Error handling is configured to ensure smooth UX.
- **Storybook**: Configured for developing and testing UI components in isolation.
- **TailwindCSS**: Used for styling with utility classes.
- **TypeScript**: Enforces type checking throughout the codebase.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
