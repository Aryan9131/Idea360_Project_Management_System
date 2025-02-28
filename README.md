# Full Stack Project and Task Management System

## Overview
This is a Full stack project that displays a list of projects and tasks and functionality to manage them. The UI is built with Material-UI components for a clean and modern design. The application is fully responsive and supports various interactive features.

## Features
- **Project Listing:** Display projects in a card-based layout.
- **Search Functionality:** Quickly find projects using a search bar.
- **Manage Tasks & Projects:** Create, edit, and delete tasks and projects.
- **User Authentication:** Implemented using **Passport JWT**.
- **Notifications:** Uses **react-toastify** for notifications and alerts.
- **Priority-wise Filtering:** Filter projects based on their priority.
- **Interactivity:** Expand project details on click.
- **Responsive Design:** Optimized for different screen sizes.

## Technologies Used
- **React** (Vite)
- **Material UI**
- **React Router** (for navigation)
- **Redux Toolkit** (for state management)
- **Passport JWT** (for authentication)
- **React Toastify** (for notifications)
- **NodeJs** (for handling server side logic)
- **Mongodb** (As database)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Aryan9131/Idea360_Project_Management_System.git
   ```

2. Install dependencies
    For Frontend:
   ```sh
   cd frontend
   npm install
   ```
    For Backend:
   ```sh
   cd backend
   npm install
   ```

4. Start the development server:
   For Frontend:
   ```sh
   npm run dev
   ```
   For Backend:
   ```sh
   node index.js
   ```
6. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Deployment
This project is deployed on **Vercel/Render**. You can view the live demo at:
[Live Demo](https://idea360-project-management-system.onrender.com/)

## Folder Structure
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── redux/         # State management (Redux)
│   ├── services/      # API calls & authentication logic
│   ├── utils/         # Helper functions
│   ├── App.js         # Main app component
│   ├── main.jsx       # Entry point
│   ├── index.css      # Global styles
│
├── public/            # Static assets
├── .env               # Environment variables
├── package.json       # Dependencies & scripts
├── README.md          # Project documentation
```
