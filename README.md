# Frontend Platform based on Nuxt

## Requirements

Make sure that the following packages are installed

#### Git

Check if installed:

```bash
git -v

# Minimum version: 2.43.0
```

Install on **Linux**:

```bash
 sudo apt install git
```

#### npm

Check if installed with:

```bash
npm -v

# Minimum version: 9.2.0

node -v

# Minimum version: 18.19.1
```

Install on **Linux**:

```bash
sudo apt install npm
```

#### yarn - Recommended

Check if installed with:

```bash
yarn -v

# Minimum version: 1.22.22
```

Install on **Linux**:

```bash
sudo npm install --global yarn
```

## Setup

Make sure to install dependencies:

```bash

# Install nuxi
npx nuxi update
```

```bash

# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
