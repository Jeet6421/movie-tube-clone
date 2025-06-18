# 🎬 Movie Tube Clone

A full-featured YouTube-inspired movie streaming web app built using **MERN Stack** with modern UI/UX and essential features like video upload, like/dislike, comment, and watch later.

## 🚀 Live Demo

🔗 [youtube-clone](https://movieclone1.netlify.app/)

---

## 📂 Features

- 🔍 Search movies by title
- 🎥 Upload videos
- 👍 Like / 👎 Dislike videos
- 💬 Comment on videos
- ❤️ Save videos to "Watch Later"
- 📜 History tracking
- 🔐 User authentication with JWT
- 🧠 Redux for state management

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer (for file upload)

---

## 🏗️ Project Structure

The project is organized into two main directories: `server` and `client`.

-   **`server`**: Contains the backend code (Node.js and Express.js).
    -   `Controllers`: Handles the logic for incoming requests and interacts with models.
    -   `Models`: Defines the database schemas (Mongoose) for resources like users, videos, and comments.
    -   `Routes`: Defines the API endpoints and maps them to the appropriate controllers.
    -   `Middleware`: Contains custom middleware functions, such as for JWT authentication.
    -   `Config`: Holds configuration files, like database connection strings.

-   **`client`**: Contains the frontend code (React).
    -   `src/Components`: Reusable UI components (e.g., buttons, cards, navigation bars).
    -   `src/Pages`: Top-level page components that correspond to different views of the application (e.g., Home, Video Player, Login).
    -   `src/Redux/Reducers`: Redux reducers that manage different slices of the application state.
    -   `src/Redux/Actions`: Redux actions that trigger state changes.
    -   `src/Api`: Functions for making API calls to the backend.
    -   `src/Utils`: Utility functions and helpers.

---

## 📖 API Documentation

The backend provides a RESTful API for managing application data.

-   **General Structure**: The API is built with Express.js and uses a resource-oriented approach.
-   **Main Resources**:
    -   `/api/users`: For user registration, login, and profile management.
    -   `/api/videos`: For video uploading, fetching, liking, disliking, and managing watch later lists.
    -   `/api/comments`: For adding and retrieving comments on videos.
-   **Authentication**: API endpoints that require user authentication are protected using JSON Web Tokens (JWT). The token needs to be included in the `Authorization` header of requests.

A more detailed API endpoint specification (e.g., using Swagger or OpenAPI) can be added in the future.

---

## 🖼️ Frontend Architecture

The frontend is built with React and utilizes modern web development practices.

-   **Component Organization**: React components are organized into `Components` (reusable, presentational components) and `Pages` (container components representing different application views). This promotes modularity and reusability.
-   **State Management**: Redux with Redux Toolkit is used for global state management.
    -   **Actions**: Plain JavaScript objects that represent an intention to change the state. They are dispatched from components when an event occurs (e.g., user clicks a button).
    -   **Reducers**: Pure functions that specify how the application's state changes in response to actions. Each reducer manages a specific part of the state.
-   **Navigation**: React Router DOM is used for client-side routing, enabling navigation between different pages without full page reloads.

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Jeet6421/movie-tube-clone.git
cd movie-tube-clone

# Install backend dependencies
cd server
npm install

# Start backend
npm start

# Install frontend dependencies
cd ../client
npm install

# Start frontend
npm start
```
