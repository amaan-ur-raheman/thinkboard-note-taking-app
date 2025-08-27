# 📝 ThinkBoard - Modern Note-Taking Application

<div align="center">

![ThinkBoard Logo](https://img.shields.io/badge/ThinkBoard-Note%20Taking%20App-00FF9D?style=for-the-badge&logo=notion&logoColor=white)

A beautiful, full-stack note-taking application built with the MERN stack. Create, edit, organize, and manage your thoughts with an intuitive and modern interface.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [API](#api) • [Contributing](#contributing)

</div>

---

## ✨ Features

### 🎨 **Beautiful User Interface**

-   **Modern Design**: Clean, minimalist interface with a stunning gradient background
-   **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices
-   **Dark Theme**: Eye-friendly design with elegant styling using DaisyUI and Tailwind CSS
-   **Smooth Animations**: Polished user experience with loading states and transitions

### 📋 **Core Functionality**

-   **📝 Create Notes**: Write and save notes with titles and rich content
-   **👁️ View Notes**: Browse all your notes in an organized, card-based layout
-   **✏️ Edit Notes**: Modify existing notes with real-time updates
-   **🗑️ Delete Notes**: Remove notes with confirmation dialogs
-   **🔍 Note Details**: View individual notes in a dedicated detail page

### 🚀 **Technical Excellence**

-   **Full-Stack MERN**: MongoDB, Express.js, React, Node.js
-   **RESTful API**: Well-structured backend with proper HTTP methods
-   **Database Persistence**: MongoDB integration with Mongoose ODM
-   **Rate Limiting**: Built-in protection against API abuse using Upstash Redis
-   **Error Handling**: Comprehensive error handling with user-friendly messages
-   **Hot Reload**: Development setup with automatic refresh capabilities

---

## 🛠️ Tech Stack

### Frontend

| Technology          | Version | Purpose                     |
| ------------------- | ------- | --------------------------- |
| **React**           | 19.1.0  | UI Library                  |
| **Vite**            | 6.3.5   | Build Tool & Dev Server     |
| **React Router**    | 7.6.0   | Client-side Routing         |
| **Tailwind CSS**    | 3.4.17  | Utility-first CSS Framework |
| **DaisyUI**         | 4.12.24 | Component Library           |
| **Axios**           | 1.11.0  | HTTP Client                 |
| **React Hot Toast** | 2.5.2   | Toast Notifications         |
| **Lucide React**    | 0.542.0 | Icon Library                |

### Backend

| Technology        | Version | Purpose                       |
| ----------------- | ------- | ----------------------------- |
| **Node.js**       | Latest  | Runtime Environment           |
| **Express.js**    | 4.18.2  | Web Framework                 |
| **MongoDB**       | Latest  | Database                      |
| **Mongoose**      | 8.14.3  | ODM for MongoDB               |
| **Upstash Redis** | 1.34.9  | Rate Limiting & Caching       |
| **CORS**          | 2.8.5   | Cross-Origin Resource Sharing |
| **Dotenv**        | 16.5.0  | Environment Variables         |

---

## 🏗️ Project Structure

```
thinkboard-note-taking-app/
├── 📁 backend/                    # Backend API Server
│   ├── 📁 src/
│   │   ├── 📁 config/             # Database & External Service Config
│   │   │   ├── db.js              # MongoDB Connection
│   │   │   └── upstash.js         # Redis Configuration
│   │   ├── 📁 controllers/        # Request Handlers
│   │   │   └── noteController.js  # Note CRUD Operations
│   │   ├── 📁 middleware/         # Custom Middleware
│   │   │   └── rateLimiter.js     # Rate Limiting Logic
│   │   ├── 📁 models/             # Database Models
│   │   │   └── Note.js            # Note Schema Definition
│   │   ├── 📁 routes/             # API Routes
│   │   │   └── noteRoutes.js      # Note Endpoints
│   │   └── server.js              # Server Entry Point
│   ├── package.json               # Backend Dependencies
│   └── package-lock.json
├── 📁 frontend/                   # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable Components
│   │   │   ├── Navbar.jsx         # Navigation Component
│   │   │   ├── NoteCard.jsx       # Note Display Card
│   │   │   ├── NotesNotFound.jsx  # Empty State Component
│   │   │   └── RateLimitedUI.jsx  # Rate Limit Warning
│   │   ├── 📁 lib/                # Utility Libraries
│   │   │   ├── axios.js           # HTTP Client Config
│   │   │   └── utils.js           # Helper Functions
│   │   ├── 📁 pages/              # Page Components
│   │   │   ├── CreatePage.jsx     # Note Creation
│   │   │   ├── HomePage.jsx       # Notes Dashboard
│   │   │   └── NoteDetailPage.jsx # Note Detail View
│   │   ├── App.jsx                # Main App Component
│   │   ├── index.css              # Global Styles
│   │   └── main.jsx               # React Entry Point
│   ├── index.html                 # HTML Template
│   ├── package.json               # Frontend Dependencies
│   └── tailwind.config.js         # Tailwind Configuration
└── README.md                      # Project Documentation
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (v18.0.0 or higher)
-   **npm** or **yarn**
-   **MongoDB** (local installation or MongoDB Atlas)
-   **Git**

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd thinkboard-note-taking-app
    ```

2. **Set up the Backend**

    ```bash
    cd backend
    npm install
    ```

3. **Set up the Frontend**

    ```bash
    cd ../frontend
    npm install
    ```

4. **Environment Configuration**

    Create a `.env` file in the `backend` directory:

    ```env
    # Database
    MONGODB_URI=mongodb://localhost:27017/thinkboard

    # Server
    PORT=5001

    # Upstash Redis (for rate limiting)
    UPSTASH_REDIS_REST_URL=your_upstash_redis_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
    ```

### Running the Application

1. **Start the Backend Server**

    ```bash
    cd backend
    npm run dev
    ```

    🟢 Server will start on `http://localhost:5001`

2. **Start the Frontend Development Server**

    ```bash
    cd frontend
    npm run dev
    ```

    🟢 Frontend will start on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

---

## 📱 Usage

### Creating Your First Note

1. Click the **"Create New Note"** button on the homepage
2. Enter a compelling title for your note
3. Write your content in the text area
4. Click **"Create Note"** to save

### Managing Notes

-   **View All Notes**: The homepage displays all your notes in a beautiful card layout
-   **Read a Note**: Click on any note card to view its full content
-   **Edit a Note**: Use the edit functionality to modify existing notes
-   **Delete a Note**: Remove notes with a confirmation dialog for safety

### Navigation

-   **Home**: View all your notes
-   **Create**: Add new notes
-   **Note Detail**: View, edit, or delete individual notes

---

## 🔌 API Reference

### Base URL

```
http://localhost:5001/api
```

### Endpoints

| Method   | Endpoint     | Description             |
| -------- | ------------ | ----------------------- |
| `GET`    | `/notes`     | Retrieve all notes      |
| `GET`    | `/notes/:id` | Get a specific note     |
| `POST`   | `/notes`     | Create a new note       |
| `PUT`    | `/notes/:id` | Update an existing note |
| `DELETE` | `/notes/:id` | Delete a note           |

### Request/Response Examples

#### Create a Note

```bash
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note..."
}
```

#### Response

```json
{
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "My First Note",
    "content": "This is the content of my note...",
    "createdAt": "2023-07-20T10:30:00.000Z",
    "updatedAt": "2023-07-20T10:30:00.000Z"
}
```

---

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm run test
```

### API Testing

The project includes comprehensive API testing examples:

-   **cURL Commands**: Manual testing scripts
-   **Postman Collection**: Import and test all endpoints
-   **JavaScript Examples**: Fetch API demonstrations

---

## 🌟 Development Features

### Hot Reload Development

-   **Backend**: Uses `nodemon` for automatic server restart
-   **Frontend**: Vite provides instant hot module replacement

### Code Quality

-   **ESLint**: Configured for both frontend and backend
-   **Prettier**: Code formatting standards
-   **Error Handling**: Comprehensive error boundaries and validation

### Security Features

-   **Rate Limiting**: Protection against API abuse
-   **CORS**: Properly configured cross-origin requests
-   **Input Validation**: Mongoose schema validation

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and commit: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

-   Follow the existing code style
-   Add tests for new features
-   Update documentation as needed
-   Ensure all tests pass before submitting

---

## 📝 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

-   **React Team** for the amazing frontend library
-   **Express.js** for the robust backend framework
-   **MongoDB** for the flexible database solution
-   **Tailwind CSS** and **DaisyUI** for the beautiful styling
-   **Vite** for the lightning-fast build tool

---

<div align="center">

**Built with ❤️ by the ThinkBoard Team**

If you found this project helpful, please consider giving it a ⭐!

[Report Bug](../../issues) • [Request Feature](../../issues) • [Documentation](../../wiki)

</div>
