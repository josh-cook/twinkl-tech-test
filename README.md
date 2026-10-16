[![CI](https://github.com/josh-cook/twinkl-tech-test/actions/workflows/ci.yml/badge.svg)](https://github.com/josh-cook/twinkl-tech-test/actions/workflows/ci.yml)

# Twinkl React Tech Test

## Task description

You are tasked with creating a React application that interacts with a Posts API (https://jsonplaceholder.typicode.com/posts) to perform CRUD operations (Create, Read, Update, Delete). The application should be implemented using TypeScript and designed to be production-ready.

Refer to the [guide on how to use the JSONPlaceholder API](https://jsonplaceholder.typicode.com/guide/).

#### Time limit

We don't expect you to spend longer than 3 hours on this task. If you'd like to capture any decisions, thoughts, or next steps you would take, feel free to do so.

#### Requirements

##### Fetch and display posts

- [ ] Implement a component that fetches the list of posts from https://jsonplaceholder.typicode.com/posts.
- [ ] Display all fetched posts in a list.

##### Search posts

- [ ] Implement a search bar that allows a user to search for posts by title and display only the desired posts. The search should be triggered on change.

##### Delete post

- [ ] For each post in the list, provide a "Remove" button.
- [ ] Implement the functionality to delete a post when the "Remove" button is clicked.

##### Testing

- [ ] Write sufficient tests to satisfy a production-ready application.

##### Documentation

- [ ] Add appropriate documentation for your application.

#### Wireframes

##### Mobile

![mobile_view](assets/mobile_view.png?raw=true)

##### Desktop

![pc_view](assets/pc_view.png?raw=true)

## Getting Started

The repository is pre-configured with the following:

- TypeScript
- React
- Prettier
- Vite
- Vitest
- ESLint

No styling / CSS libraries are included by default - feel free to add your own using CSS Modules, Tailwind CSS, CSS-in-JS, plain CSS etc. but avoid heavyweight UI frameworks such as Matieral-UI, Chakra UI, shadcn/ui etc.

You are free to introduce additional libraries or tools as you see fit.

### Prerequisites

- Node.js: Ensure you have Node.js version 24 or higher installed (see `.node-version`).
- pnpm: This project uses [pnpm](https://pnpm.io) — install it by following the [official instructions](https://pnpm.io/installation). (If you prefer, `corepack enable` will use the version pinned in `package.json`.)

### Installation

#### Clone the repository

```
git clone https://github.com/twinkltech/twinkl-react-tech-test.git
```

```
cd twinkl-react-tech-test
```

#### Install dependencies

```
pnpm install
```

### Scripts

#### Development server

Start the development server:

```
pnpm dev
```

#### Lint (ESLint)

Check for linting issues:

```
pnpm lint
```

Fix lint issues in the codebase:

```
pnpm lint:fix
```

#### Format (Prettier)

Check for formatting issues:

```
pnpm format
```

Fix formatting issues:

```
pnpm format:fix
```

#### Testing (Vitest)

Run the test suite with:

```
pnpm test
```
