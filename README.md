# 🚀 AI Chatbot Backend API

A scalable backend service for an AI-powered chatbot application built with **Node.js**, **Express.js**, **TypeScript**, **MongoDB**, **JWT Authentication**, **OpenAI**, and **Google Gemini** integration.

This API handles user authentication, chat management, AI model communication, session handling, and secure token-based authorization.

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🍪 HTTP-Only Cookie Support
- 🤖 OpenAI Integration
- 🧠 Google Gemini Integration
- 💬 AI Chat Conversations
- 📜 Chat History Management
- 🔒 Protected Routes
- 🗄️ MongoDB Database Integration
- ✅ Request Validation
- ⚡ TypeScript Support
- 🏗️ MVC Architecture
- 🌍 RESTful API Design

---

# 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Tokens)
- HTTP-Only Cookies
- Password Hashing (bcrypt)

### AI Providers

- OpenAI API
- Google Gemini API

### Validation & Security

- Express Validator
- Cookie Parser
- CORS

---

# 📂 Project Structure

```bash
backend/
│
├── dist/                    # Compiled JavaScript files
│
├── src/
│   │
│   ├── config/
│   │   ├── gemini-config.ts
│   │   └── openai-config.ts
│   │
│   ├── controllers/
│   │   ├── chat-controllers.ts
│   │   └── user-controllers.ts
│   │
│   ├── db/
│   │   └── connection.ts
│   │
│   ├── models/
│   │   └── User.ts
│   │
│   ├── routes/
│   │   ├── chat-routes.ts
│   │   ├── user-routes.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── token-manager.ts
│   │   └── validators.ts
│   │
│   ├── app.ts
│   └── index.ts
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🏗️ Architecture

```text
Client
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ├── User Logic
   ├── Chat Logic
   │
   ▼
Services / AI Providers
   │
   ├── OpenAI
   └── Gemini
   │
   ▼
MongoDB Database
```

---

# 🔑 Authentication Flow

```text
User Signup
      │
      ▼
Hash Password
      │
      ▼
Store User in MongoDB
      │
      ▼
Generate JWT
      │
      ▼
Send Secure Cookie
```

### Login

```text
User Login
      │
      ▼
Verify Credentials
      │
      ▼
Generate JWT
      │
      ▼
Store Cookie
      │
      ▼
Access Protected Routes
```

---

# 🤖 AI Chat Flow

```text
User Message
      │
      ▼
Chat Controller
      │
      ▼
AI Provider Selection
      │
      ├── OpenAI
      └── Gemini
      │
      ▼
Generate Response
      │
      ▼
Store Conversation
      │
      ▼
Return Response
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

OPENAI_API_KEY=

GEMINI_API_KEY=

COOKIE_SECRET=

NODE_ENV=development
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Nayan-Krishna-Ball/Ai-ChatBot-Backend
```

### Navigate to Project

```bash
cd chatbot-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

```bash
cp .env.example .env
```

Update the values inside `.env`.

---

# ▶️ Running the Application

### Development Mode

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Production Mode

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

### Register User

```http
POST /api/v1/users/signup
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login User

```http
POST /api/v1/users/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Logout User

```http
GET /api/v1/users/logout
```

---

### Verify User

```http
GET /api/v1/users/auth-status
```

---

## Chat APIs

### Send Message

```http
POST /api/v1/chat/new
```

Request:

```json
{
  "message": "Hello AI"
}
```

---

### Get User Chats

```http
GET /api/v1/chat/all-chats
```

---

### Delete Chat History

```http
DELETE /api/v1/chat/delete
```

---

# 🗄️ Database Schema

## User Model

```typescript
{
  name: string;
  email: string;
  password: string;
  chats: Chat[];
}
```

### Chat Structure

```typescript
{
  role: "user" | "assistant";
  content: string;
}
```

---

# 🔒 Security Features

- Password Hashing
- JWT Authentication
- Secure HTTP-Only Cookies
- Protected Routes
- Request Validation
- Environment Variable Protection
- CORS Configuration

---

# 📋 Available Scripts

```bash
npm run dev       # Development Server
npm run build     # Compile TypeScript
npm start         # Production Server
```

---

# 🧩 Core Modules

| Module      | Purpose                   |
| ----------- | ------------------------- |
| config      | AI Provider Configuration |
| controllers | Business Logic            |
| routes      | API Endpoints             |
| models      | MongoDB Schemas           |
| db          | Database Connection       |
| utils       | Helpers & Utilities       |

---

# 🔮 Future Improvements

- Streaming Responses
- Multiple AI Model Switching
- Refresh Token Authentication
- Rate Limiting
- Redis Caching
- Conversation Summarization
- API Usage Analytics
- Docker Support
- Unit & Integration Testing
- WebSocket Real-Time Chat

---

# 🤝 Contributing

1. Fork the repository

```bash
git checkout -b feature/new-feature
```

2. Commit changes

```bash
git commit -m "Added new feature"
```

3. Push branch

```bash
git push origin feature/new-feature
```

4. Create Pull Request

---

# 📄 License

Licensed under the MIT License.

---

# 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/Nayan-Krishna-Ball
- LinkedIn: https://www.linkedin.com/in/nayan-krishna-dd/

---

<div align="center">

### ⭐ If you found this project useful, please consider starring the repository!

Built with ❤️ using Node.js, TypeScript, MongoDB, OpenAI & Gemini.

</div>
