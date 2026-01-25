# DevClub Wiki

Welcome to the DevClub Wiki repository. This project is a documentation and resource hub built using **Astro**, **React**, and **Tailwind CSS**. It is designed to be fast, performant, and easily deployable to GitHub Pages.

## Project Overview

The DevClub Wiki serves as a central knowledge base for the community, covering topics such as:
- **Contributors Guide**: Resources and guidelines for project contributors.
- **Cloud Data AI**: Documentation and articles related to cloud computing and AI technologies.

The project is structured as a static site generator (SSG), compiling markdown and Astro components into optimized HTML/CSS/JS located in the `docs/` directory.

## Quickstart

Follow these steps to get the project running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (LTS version recommended).
- **npm**: Comes with Node.js.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dev-clubs/dev-clubs.github.io.git
    cd dev-clubs.github.io
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Local Development

Start the local development server to preview changes in real-time:

```bash
npm run dev
```

-   The site will be available at `http://localhost:4321`.
-   Modifications to `src/` files will trigger an automatic reload.

### Building for Production

To build the static site for deployment:

```bash
npm run build
```

-   The output will be generated in the `docs/` folder.
-   This folder is configured to be served via GitHub Pages.

## Project Structure

-   `src/`: Source code including Astro pages, components, and styles.
-   `src/styles/`: Global stylesheets (e.g., `main.css` with Google Sans Flex).
-   `docs/`: Production build output (do not edit manually).
-   `public/`: Static assets like images and global files.
