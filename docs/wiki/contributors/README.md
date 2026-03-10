# Open GitHub Collaboration

Welcome to the DevClub Contributors guide! We believe in open, transparent, and collaborative software development. This document outlines how we work together on GitHub.

## Core Values
- **Transparency**: All discussions happen in public issues or PRs.
- **Inclusivity**: Everyone is welcome to contribute, regardless of experience level.
- **Quality**: We strive for clean, maintainable, and well-documented code.

## The Workflow

### 1. Issues First
Before writing code, please check existing [Issues](https://github.com/dev-clubs/dev-clubs.github.io/issues). If your idea isn't there, create a new issue to discuss it.
- **Tags**: Use `good first issue`, `bug`, or `feature-request`.
- **Description**: Be clear about *what* needs to be done and *why*.

### 2. Fork & Branch
1. **Fork** the repository to your own account.
2. **Clone** it locally: `git clone https://github.com/YOUR-USERNAME/dev-clubs.github.io.git`
3. Create a **feature branch**: `git checkout -b feature/amazing-feature`

### 3. Pull Requests (PRs)
- Keep PRs small and focused.
- Reference the Issue ID (e.g., `Fixes #42`) in your description.
- Add screenshots for UI changes.
- Ensure all CI checks pass.

### 4. Code Review
- Be respectful and constructive.
- Request changes if something isn't right.
- Approve when it looks good!

## Contribution Standards
- **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat: add wiki engine`, `fix: header alignment`).
- **Formatting**: We use Prettier. Run `npm run format` before pushing.
- **Testing**: Add tests for new logic where possible.

Happy Coding! 🚀
