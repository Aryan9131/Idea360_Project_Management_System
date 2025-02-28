# Task Management System

A simple task management application built using the MERN stack (MongoDB, Express, React, Node.js), Material-UI for styling, Redux Toolkit for state management, and Passport-JWT for user authentication. The application allows users to create, edit, delete, and prioritize tasks, along with managing user authentication and notifications.

## **Demo**

You can view the live version of the Task Management System hosted on Render:
 [Task Management System - Live Demo](https://task-management-system-knam.onrender.com)

---

## **Features**
- **Task Creation**: Create new tasks with a title, description, due date, and priority level.
- **Task List**: View all tasks in a paginated list with title, due date, and status (pending/completed).
- **Task Details**: View detailed information about any task, including its description and due date.
- **Task Editing**: Edit the title, description, and due date of existing tasks.
- **Task Deletion**: Delete tasks with a confirmation dialog to ensure intentional deletion.
- **Task Status Update**: Mark tasks as completed or update their status.
- **User Authentication**: Implemented a basic user authentication system where users must log in to access task-related features. JWT (JSON Web Tokens) are used for secure authentication.
- **Priority Management**: Move tasks between different priority levels (e.g., high, medium, low) and visually represent them with color-coded lists.
- **Notifications**: Notifications are displayed using **Toaster** for task-related actions (e.g., task creation, deletion, edit success/error, sign-in success).

---

## **Technologies Used**

- **Frontend**:
  - React
  - Material-UI (for styling)
  - Redux Toolkit (for state management)
  - Toaster (for notifications)
  - React Router (for navigation)

- **Backend**:
  - Node.js (with Express)
  - MongoDB (for task and user data storage)
  - Passport-JWT (for user authentication and authorization)
  - JWT (JSON Web Tokens) for secure user authentication
  - Mongoose (for MongoDB schema management)

---

## **Setup & Installation**

### **Backend (Server)**

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install the backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory and configure the necessary environment variables (e.g., `JWT_SECRET`, `MONGODB_URI`, etc.).

4. Start the backend server:

    ```bash
    npm start
    ```

    The backend will run on `http://localhost:8000` (or the hosted URL on Render).

### **Frontend (Client)**

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install the frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `frontend` directory and add the `BACKEND_URL` to point to your backend.

4. Start the frontend application:

    ```bash
    npm run dev
    ```
---

## **API Endpoints**

### **User Authentication**

- **POST** `/api/user/sign-up`: Register a new user
- **POST** `/api/user/sign-in`: Log in an existing user (returns JWT token)

---

## **State Management**

Redux Toolkit is used to manage global state, including:

- **User**: Stores user authentication data (JWT token, user information).
- **Tasks**: Stores the list of tasks, including task details, statuses, and priority levels.
---

## **Visual Representation**

- Each task list is color-coded based on its priority (e.g., high priority tasks may be displayed in red, medium in yellow, and low in green).
- The application uses Material-UI components for a clean and modern user interface.

---

## **Security**

- **JWT Authentication**: Only authorized users can create, view, edit, or delete tasks. A valid JWT token is required for accessing these endpoints.
- **Passport-JWT**: Passport-JWT middleware is used for securely authenticating users with JSON Web Tokens.

---

## **Contributing**

If you'd like to contribute to this project, feel free to fork it and submit a pull request. Please make sure to follow the code style and include tests where possible.
