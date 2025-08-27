# 📝 ThinkBoard - Modern Note-Taking Application

<div align="center">

![ThinkBoard Logo](https://img.shields.io/badge/ThinkBoard-Note%20Taking%20App-00FF9D?style=for-the-badge&logo=notion&logoColor=white)

A beautiful, full-stack note-taking application built with the MERN stack. Create, edit, organize, and manage your thoughts with an intuitive and modern interface.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-FF6B6B?style=for-the-badge&logo=vercel&logoColor=white)](https://thinkboard-note-taking-app.onrender.com/)

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=flat&logo=render&logoColor=white)](https://render.com/)

[🎯 Features](#features) • [🌐 Live Demo](#live-demo) • [🚀 Quick Start](#quick-start) • [📖 Usage](#usage) • [🔌 API](#api-reference) • [🤝 Contributing](#contributing)

</div>

---

## 🌐 Live Demo

**🚀 [Try ThinkBoard Live](https://thinkboard-note-taking-app.onrender.com/)**

Experience the full functionality of ThinkBoard without any setup! The live demo is deployed on Render and includes all features:

-   ✅ Create, edit, and delete notes
-   ✅ Responsive design for all devices
-   ✅ Real-time data persistence
-   ✅ Rate limiting protection
-   ✅ Modern UI with smooth animations

> **Note**: The app may take a moment to load initially as Render spins up the server from sleep mode.

---

## ✨ Features

### 🎨 **Beautiful User Interface**

-   **Modern Design**: Clean, minimalist interface with stunning gradient backgrounds
-   **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices
-   **Dark Theme**: Eye-friendly design with elegant styling using DaisyUI and Tailwind CSS
-   **Smooth Animations**: Polished user experience with loading states and transitions
-   **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy

### 📋 **Core Functionality**

-   **📝 Create Notes**: Write and save notes with titles and rich content
-   **👁️ View Notes**: Browse all your notes in an organized, card-based layout
-   **✏️ Edit Notes**: Modify existing notes with real-time updates
-   **🗑️ Delete Notes**: Remove notes with confirmation dialogs for safety
-   **🔍 Note Details**: View individual notes in a dedicated detail page
-   **📱 Mobile-First**: Optimized for mobile devices with touch-friendly interactions

### 🚀 **Technical Excellence**

-   **Full-Stack MERN**: MongoDB, Express.js, React 19, Node.js
-   **RESTful API**: Well-structured backend with proper HTTP methods and status codes
-   **Database Persistence**: MongoDB integration with Mongoose ODM for data modeling
-   **Rate Limiting**: Built-in protection against API abuse using Upstash Redis
-   **Error Handling**: Comprehensive error handling with user-friendly messages
-   **Hot Reload**: Development setup with automatic refresh capabilities
-   **Production Ready**: Deployed on Render with environment-specific configurations

---

## 🛠️ Tech Stack

<div align="center">

### Frontend Technologies

| Technology                                                                                                             | Version | Purpose                      |
| ---------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------- |
| ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)                       | 19.1.0  | Modern UI Library with Hooks |
| ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite&logoColor=white)                           | 6.3.5   | Lightning-fast Build Tool    |
| ![React Router](https://img.shields.io/badge/React%20Router-7.6.0-CA4245?style=flat&logo=react-router&logoColor=white) | 7.6.0   | Client-side Routing          |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)      | 3.4.17  | Utility-first CSS Framework  |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-4.12.24-5A0EF8?style=flat&logo=daisyui&logoColor=white)                | 4.12.24 | Beautiful Component Library  |
| ![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?style=flat&logo=axios&logoColor=white)                       | 1.11.0  | Promise-based HTTP Client    |

### Backend Technologies

| Technology                                                                                                 | Version | Purpose                            |
| ---------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js&logoColor=white)     | Latest  | JavaScript Runtime                 |
| ![Express.js](https://img.shields.io/badge/Express-4.18.2-000000?style=flat&logo=express&logoColor=white)  | 4.18.2  | Fast Web Framework                 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat&logo=mongodb&logoColor=white)     | Latest  | NoSQL Database                     |
| ![Mongoose](https://img.shields.io/badge/Mongoose-8.14.3-880000?style=flat&logo=mongoose&logoColor=white)  | 8.14.3  | MongoDB Object Modeling            |
| ![Upstash Redis](https://img.shields.io/badge/Upstash-1.34.9-DC382D?style=flat&logo=redis&logoColor=white) | 1.34.9  | Serverless Redis for Rate Limiting |

### Development & Deployment

| Technology                                                                                                  | Purpose                    |
| ----------------------------------------------------------------------------------------------------------- | -------------------------- |
| ![Render](https://img.shields.io/badge/Render-Deployment-46E3B7?style=flat&logo=render&logoColor=white)     | Cloud Application Platform |
| ![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-4B32C3?style=flat&logo=eslint&logoColor=white) | Code Linting & Quality     |
| ![Nodemon](https://img.shields.io/badge/Nodemon-Development-76D04B?style=flat&logo=nodemon&logoColor=white) | Development Auto-restart   |

</div>

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

### 🌐 Option 1: Try the Live Demo (Recommended)

**[🚀 Launch ThinkBoard](https://thinkboard-note-taking-app.onrender.com/)**

No setup required! Experience all features instantly in your browser.

### 💻 Option 2: Local Development Setup

#### Prerequisites

Ensure you have these installed:

-   **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
-   **npm** or **yarn** package manager
-   **MongoDB** - [Local installation](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/atlas)
-   **Git** - [Download here](https://git-scm.com/)

#### Installation Steps

1. **📥 Clone the Repository**

    ```bash
    git clone https://github.com/amaan-ur-raheman/thinkboard-note-taking-app.git
    cd thinkboard-note-taking-app
    ```

2. **⚙️ Backend Setup**

    ```bash
    cd backend
    npm install
    ```

3. **🎨 Frontend Setup**

    ```bash
    cd ../frontend
    npm install
    ```

4. **🔧 Environment Configuration**

    Create a `.env` file in the `backend` directory:

    ```env
    # Database Configuration
    MONGODB_URI=mongodb://localhost:27017/thinkboard
    # Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/thinkboard

    # Server Configuration
    PORT=5001

    # Upstash Redis (Optional - for rate limiting)
    UPSTASH_REDIS_REST_URL=your_upstash_redis_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
    ```

#### 🏃‍♂️ Running the Application

1. **🔥 Start Backend Server**

    ```bash
    cd backend
    npm run dev
    ```

    ✅ Server running at `http://localhost:5001`

2. **🎯 Start Frontend Server** (in a new terminal)

    ```bash
    cd frontend
    npm run dev
    ```

    ✅ Frontend running at `http://localhost:5173`

3. **🌐 Open Your Browser**

    Navigate to `http://localhost:5173` and start creating notes!

---

## 📱 Usage Guide

### 🎯 Getting Started

**[Try it live first!](https://thinkboard-note-taking-app.onrender.com/)** - No setup required.

### ✍️ Creating Your First Note

1. **🏠 From Homepage**: Click the **"Create New Note"** button
2. **📝 Add Title**: Enter a compelling title for your note
3. **✨ Write Content**: Use the spacious text area to write your thoughts
4. **💾 Save**: Click **"Create Note"** to save permanently

### 🗂️ Managing Your Notes

| Action                | How To                           | Features                                |
| --------------------- | -------------------------------- | --------------------------------------- |
| **📖 View All Notes** | Visit homepage                   | Beautiful card layout with previews     |
| **👁️ Read Full Note** | Click any note card              | Dedicated detail page with full content |
| **✏️ Edit Note**      | Click edit button in detail view | Real-time updates and auto-save         |
| **🗑️ Delete Note**    | Click delete with confirmation   | Safe deletion with confirmation dialog  |
| **🔍 Browse Notes**   | Scroll through homepage          | Responsive grid layout                  |

### 🧭 Navigation

-   **🏠 Home** (`/`) - View all your notes in a grid layout
-   **➕ Create** (`/create`) - Add new notes with title and content
-   **📄 Note Detail** (`/note/:id`) - View, edit, or delete individual notes

### 📱 Mobile Experience

ThinkBoard is fully responsive and optimized for:

-   **📱 Mobile phones** - Touch-friendly interface
-   **📟 Tablets** - Optimized layout for medium screens
-   **💻 Desktop** - Full-featured experience with hover effects

---

## 🔌 API Reference

### 🌐 Base URLs

-   **Production**: `https://thinkboard-note-taking-app.onrender.com/api`
-   **Development**: `http://localhost:5001/api`

### 📋 Endpoints

| Method   | Endpoint     | Description             | Rate Limit |
| -------- | ------------ | ----------------------- | ---------- |
| `GET`    | `/notes`     | Retrieve all notes      | 100/hour   |
| `GET`    | `/notes/:id` | Get a specific note     | 100/hour   |
| `POST`   | `/notes`     | Create a new note       | 50/hour    |
| `PUT`    | `/notes/:id` | Update an existing note | 50/hour    |
| `DELETE` | `/notes/:id` | Delete a note           | 30/hour    |

### 📝 Request/Response Examples

#### ➕ Create a Note

```bash
POST /api/notes
Content-Type: application/json

{
  "title": "My Awesome Note",
  "content": "This is where I write my brilliant thoughts..."
}
```

**✅ Success Response (201)**

```json
{
    "_id": "65f7b3b3b3b3b3b3b3b3b3b3",
    "title": "My Awesome Note",
    "content": "This is where I write my brilliant thoughts...",
    "createdAt": "2024-01-20T10:30:00.000Z",
    "updatedAt": "2024-01-20T10:30:00.000Z"
}
```

#### 📖 Get All Notes

```bash
GET /api/notes
```

**✅ Success Response (200)**

```json
[
    {
        "_id": "65f7b3b3b3b3b3b3b3b3b3b3",
        "title": "My Awesome Note",
        "content": "This is where I write my brilliant thoughts...",
        "createdAt": "2024-01-20T10:30:00.000Z",
        "updatedAt": "2024-01-20T10:30:00.000Z"
    }
]
```

#### ✏️ Update a Note

```bash
PUT /api/notes/65f7b3b3b3b3b3b3b3b3b3b3
Content-Type: application/json

{
  "title": "Updated Note Title",
  "content": "Updated content with new insights..."
}
```

#### 🗑️ Delete a Note

```bash
DELETE /api/notes/65f7b3b3b3b3b3b3b3b3b3b3
```

**✅ Success Response (200)**

```json
{
    "message": "Note deleted successfully"
}
```

### ⚠️ Error Responses

| Status Code | Description  | Example Response                              |
| ----------- | ------------ | --------------------------------------------- |
| `400`       | Bad Request  | `{"error": "Title and content are required"}` |
| `404`       | Not Found    | `{"error": "Note not found"}`                 |
| `429`       | Rate Limited | `{"error": "Too many requests"}`              |
| `500`       | Server Error | `{"error": "Internal server error"}`          |

---

## 🧪 Testing & Quality Assurance

### 🌐 Live Testing

Test all features instantly: **[ThinkBoard Live Demo](https://thinkboard-note-taking-app.onrender.com/)**

### 🔧 Local Testing

#### Backend API Testing

```bash
cd backend
npm run dev  # Start the server first
```

#### Frontend Testing

```bash
cd frontend
npm run dev  # Start development server
npm run build  # Test production build
npm run preview  # Preview production build
```

### 🧪 API Testing Tools

#### cURL Examples

```bash
# Test creating a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Note","content":"Testing the API"}'

# Test getting all notes
curl http://localhost:5001/api/notes

# Test getting a specific note
curl http://localhost:5001/api/notes/YOUR_NOTE_ID
```

#### JavaScript/Fetch Examples

```javascript
// Create a new note
const response = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        title: "My Test Note",
        content: "Testing with JavaScript",
    }),
});
const newNote = await response.json();
```

### ✅ Quality Features

-   **Rate Limiting**: Upstash Redis protection against API abuse
-   **Error Handling**: Comprehensive error boundaries and validation
-   **Input Validation**: Mongoose schema validation
-   **CORS Security**: Properly configured cross-origin requests
-   **Environment Variables**: Secure configuration management

---

## 🌟 Development Features & Architecture

### ⚡ Development Experience

-   **🔥 Hot Reload**: Instant updates with Vite (frontend) and Nodemon (backend)
-   **📦 Modern Build Tools**: Vite for lightning-fast builds and development
-   **🎯 TypeScript Ready**: ESLint configured for modern JavaScript/TypeScript
-   **🔧 Environment Management**: Dotenv for secure configuration

### 🏗️ Architecture Highlights

-   **📱 Component-Based**: Modular React components for maintainability
-   **🔄 RESTful Design**: Clean API architecture following REST principles
-   **🗄️ Data Modeling**: Mongoose schemas for structured data validation
-   **🚦 Middleware Pipeline**: Express middleware for authentication, CORS, and rate limiting
-   **📊 State Management**: React hooks for efficient state handling

### 🔒 Security & Performance

-   **🛡️ Rate Limiting**: Upstash Redis prevents API abuse (configurable limits)
-   **🌐 CORS Protection**: Secure cross-origin resource sharing
-   **✅ Input Validation**: Server-side validation with Mongoose schemas
-   **⚡ Optimized Builds**: Production-ready builds with code splitting
-   **📱 Mobile Optimized**: Responsive design with mobile-first approach

### 🚀 Deployment Ready

-   **☁️ Cloud Deployed**: Live on Render with automatic deployments
-   **🔧 Environment Configs**: Separate development and production settings
-   **📈 Scalable Architecture**: Ready for horizontal scaling
-   **🔄 CI/CD Ready**: Structured for continuous integration workflows

---

## 🤝 Contributing

We love contributions! Help make ThinkBoard even better. Here's how:

### 🚀 Quick Contribution Guide

1. **🍴 Fork the Repository**

    ```bash
    # Click the Fork button on GitHub, then:
    git clone https://github.com/YOUR_USERNAME/thinkboard-note-taking-app.git
    cd thinkboard-note-taking-app
    ```

2. **🌿 Create a Feature Branch**

    ```bash
    git checkout -b feature/amazing-new-feature
    # or
    git checkout -b fix/important-bug-fix
    ```

3. **💻 Make Your Changes**

    - Follow existing code style and patterns
    - Test your changes locally
    - Update documentation if needed

4. **📝 Commit Your Changes**

    ```bash
    git add .
    git commit -m "✨ Add amazing new feature"
    # Use conventional commits: feat:, fix:, docs:, style:, refactor:, test:
    ```

5. **🚀 Push and Create PR**
    ```bash
    git push origin feature/amazing-new-feature
    # Then create a Pull Request on GitHub
    ```

### 🎯 Contribution Ideas

-   **🐛 Bug Fixes**: Found an issue? We'd love a fix!
-   **✨ New Features**: Note categories, search functionality, dark/light theme toggle
-   **🎨 UI Improvements**: Better animations, accessibility improvements
-   **📚 Documentation**: Improve README, add code comments, create tutorials
-   **🧪 Testing**: Add unit tests, integration tests, or E2E tests
-   **⚡ Performance**: Optimize loading times, reduce bundle size

### 📋 Development Guidelines

-   **Code Style**: Follow existing patterns and ESLint rules
-   **Testing**: Test your changes thoroughly before submitting
-   **Documentation**: Update README and code comments as needed
-   **Commits**: Use clear, descriptive commit messages
-   **Pull Requests**: Provide detailed descriptions of changes

### 🏆 Recognition

Contributors will be recognized in our README and release notes!

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/amaan-ur-raheman/thinkboard-note-taking-app?style=flat&logo=github)
![GitHub language count](https://img.shields.io/github/languages/count/amaan-ur-raheman/thinkboard-note-taking-app?style=flat&logo=github)
![GitHub top language](https://img.shields.io/github/languages/top/amaan-ur-raheman/thinkboard-note-taking-app?style=flat&logo=javascript&logoColor=white)

</div>

---

## 📝 License

This project is licensed under the **ISC License**. Feel free to use, modify, and distribute as needed.

---

## 🙏 Acknowledgments & Credits

Special thanks to the amazing open-source community:

-   **⚛️ React Team** - For the incredible UI library and ecosystem
-   **🚀 Express.js** - For the fast, minimalist web framework
-   **🍃 MongoDB** - For the flexible, document-based database
-   **🎨 Tailwind CSS & DaisyUI** - For the beautiful, utility-first styling
-   **⚡ Vite** - For the lightning-fast build tool and dev experience
-   **☁️ Render** - For the seamless deployment platform
-   **🔴 Upstash** - For the serverless Redis solution

---

<div align="center">

### 🚀 **[Try ThinkBoard Live Now!](https://thinkboard-note-taking-app.onrender.com/)**

**Built with ❤️ and modern web technologies**

If you found ThinkBoard helpful, please consider giving it a ⭐ on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/amaan-ur-raheman/thinkboard-note-taking-app?style=social)](https://github.com/amaan-ur-raheman/thinkboard-note-taking-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amaan-ur-raheman/thinkboard-note-taking-app?style=social)](https://github.com/amaan-ur-raheman/thinkboard-note-taking-app/network/members)

---

**🔗 Quick Links**

[🌐 Live Demo](https://thinkboard-note-taking-app.onrender.com/) •
[📁 Source Code](https://github.com/amaan-ur-raheman/thinkboard-note-taking-app) •
[🐛 Report Bug](https://github.com/amaan-ur-raheman/thinkboard-note-taking-app/issues) •
[💡 Request Feature](https://github.com/amaan-ur-raheman/thinkboard-note-taking-app/issues)

</div>
