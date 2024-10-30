---

# Amani Frontend

This repository contains the frontend code for the **Amani** project. It is a React-based application with TypeScript, TailwindCSS, and Storybook integration. The project is structured to provide a responsive, component-based UI, with additional error handling and deployment scripts for streamlined development.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Using the git_push.sh Script](#using-the-git_pushsh-script)
- [Contributing](#contributing)


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

## Scripts

The following scripts are available in `package.json`:

- `npm start` - Starts the development server using `react-scripts`.
- `npm run build` - Builds the project for production using `react-scripts`.
- `npm test` - Runs the test suite using `react-scripts`.
- `npm run eject` - Ejects the configuration files (use with caution).
- `npm run storybook` - Launches Storybook for isolated component development on port 6006.
- `npm run build-storybook` - Builds a static Storybook.
- `npm run deploy` - Deploys the build to GitHub Pages using `gh-pages`.

## Configuration

- **Error Handling**: Configured to ensure a smooth UX.
- **Storybook**: Configured for developing and testing UI components in isolation.
- **TailwindCSS**: Used for styling with utility classes.
- **TypeScript**: Enforces type checking throughout the codebase.

## GitHub Pages Deployment

GitHub Pages is used to deploy the production build of the Amani frontend project. Here’s how it works:

1. **Predeployment with `npm run build`**:
   - The `"predeploy": "npm run build"` script automatically builds the project before deploying, generating optimized static files in the `build` directory.

2. **Deploying with `gh-pages`**:
   - The `"deploy": "gh-pages -d build"` command in `package.json` publishes the `build` directory to the `gh-pages` branch. This allows GitHub Pages to serve the static files.
   - The deployment URL can be set by adding a `homepage` field in `package.json`, like so:
     ```json
     "homepage": "https://yourusername.github.io/amani-frontend"
     ```
   - After deploying, GitHub Pages will make the project accessible at the specified URL.

## Using the `git_push.sh` Script

The `git_push.sh` script simplifies the process of staging, committing, and pushing changes to GitHub. Here’s the script content and how it works:

```bash
#!/bin/bash

# Check if a commit message is provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Store commit message from command line argument
commit_message="$1"

# Stage all changes
git add .

# Commit with the provided commit message
git commit -m "$commit_message"

# Push to the repository
git push
```

### How to Use `git_push.sh`

1. **Save the Script**: Make sure `git_push.sh` is saved in the root directory of your project.
   
2. **Make the Script Executable**:
   Run the following command to make the script executable:
   ```bash
   chmod +x git_push.sh
   ```

3. **Run the Script**:
   To use the script, simply provide a commit message as an argument:
   ```bash
   ./git_push.sh "Your commit message here"
   ```

This script will:
- Check if a commit message is provided; if not, it will prompt you to enter one.
- Stage all changes with `git add .`.
- Commit with the provided message.
- Push the commit to the repository.


## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---
