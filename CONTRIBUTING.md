# Contributing to Movie Tube Clone

First off, thank you for considering contributing to Movie Tube Clone! We welcome any contributions that help improve the project, whether it's bug fixes, new features, or documentation improvements.

## 🚀 Getting Started

To get the project up and running on your local machine, please follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Jeet6421/movie-tube-clone.git
    cd movie-tube-clone
    ```

2.  **Install Dependencies**:
    The project is split into a `server` (backend) and a `client` (frontend). You'll need to install dependencies for both.

    *   **Backend (`server`)**:
        ```bash
        cd server
        npm install
        ```

    *   **Frontend (`client`)**:
        ```bash
        cd ../client
        npm install
        ```

3.  **Set up Environment Variables**:
    Both the server and client might require environment variables for configuration (e.g., database connection strings, API keys).
    *   For the `server`, create a `.env` file in the `server` directory by copying `.env.example` (if it exists) and fill in the necessary values.
    *   For the `client`, create a `.env` file in the `client` directory if needed, following any instructions in `client/README.md` or `.env.example`.

4.  **Run Development Servers**:

    *   **Backend (`server`)**:
        From the `server` directory:
        ```bash
        npm start
        ```
        This will typically start the backend server on `http://localhost:8000` (or the port specified in your environment variables).

    *   **Frontend (`client`)**:
        From the `client` directory:
        ```bash
        npm start
        ```
        This will typically start the frontend development server and open the app in your default browser at `http://localhost:3000`.

For more details on installation, you can also refer to the [Installation section in the README.md](./README.md#⚙️-installation).

## ✍️ Making Changes

1.  **Create a Branch**:
    Before you start making changes, create a new branch from the `main` (or `develop` if it exists) branch. Use a descriptive name for your branch.
    ```bash
    git checkout -b feature/your-feature-name  # For new features
    # or
    git checkout -b fix/bug-description       # For bug fixes
    ```

2.  **Coding Style**:
    Please try to maintain a consistent coding style with the existing codebase. If there are linters or formatters configured (e.g., ESLint, Prettier), please use them.
    *   Write clear, understandable, and maintainable code.
    *   Add comments where necessary to explain complex logic.

3.  **Commit Messages**:
    Write clear and concise commit messages. A good commit message should briefly explain the "what" and "why" of the changes.
    *   Start with a verb in the imperative mood (e.g., `Add feature`, `Fix bug`, `Update documentation`).
    *   Reference any relevant issue numbers if applicable (e.g., `Fix: #123 Implement user login`).

## 📥 Submitting Pull Requests

Once you're ready to submit your changes:

1.  **Push to Your Fork**:
    Push your changes to your forked repository on GitHub.
    ```bash
    git push origin feature/your-feature-name
    ```

2.  **Open a Pull Request (PR)**:
    Go to the original repository on GitHub and open a pull request from your branch to the main project's `main` (or `develop`) branch.

3.  **PR Description**:
    In your pull request description, please include:
    *   A clear summary of the changes you've made.
    *   The problem or feature your PR addresses.
    *   Reference any related issue numbers (e.g., "Closes #123", "Fixes #456").
    *   Any specific areas you'd like the reviewer to focus on.

4.  **Code Review**:
    Your pull request will be reviewed by maintainers. Be prepared to discuss your changes and make any necessary adjustments based on feedback. Once approved, your changes will be merged.

## 🐞 Reporting Bugs or Suggesting Enhancements

If you find a bug or have an idea for a new feature, please open an issue on GitHub.

1.  **Check Existing Issues**: Before creating a new issue, please check if a similar issue already exists.

2.  **Reporting Bugs**:
    When reporting a bug, please include:
    *   A clear and descriptive title.
    *   Steps to reproduce the bug.
    *   What you expected to happen.
    *   What actually happened (including any error messages or screenshots).
    *   Your environment (e.g., browser, operating system).

3.  **Suggesting Enhancements**:
    When suggesting an enhancement, please include:
    *   A clear and descriptive title.
    *   A detailed explanation of the proposed enhancement.
    *   Why this enhancement would be beneficial to the project.
    *   Any potential drawbacks or considerations.

Thank you for contributing to Movie Tube Clone! Your help is greatly appreciated.
