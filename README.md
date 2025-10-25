# 🧠 DockGen AI – Full Stack Application

### 🔗 **Live Demo**
👉 [https://nodeapp-1-4o66.onrender.com](https://nodeapp-1-4o66.onrender.com)


**AI-Powered Dockerfile Generator**  
Generate, build, and deploy optimized Dockerfiles for any JavaScript framework using AI.

---

## 🌍 Live Demo

| Service | URL |
|----------|-----|
| 🌐 **Frontend (Next.js)** | [https://nodeapp-1-4o66.onrender.com](https://nodeapp-1-4o66.onrender.com) |
| ⚙️ **Backend (Express + Node.js)** | [https://nodeapp-ww3l.onrender.com/api](https://nodeapp-ww3l.onrender.com/api) |

---

## 🧩 Project Overview

DockGen AI is a full-stack application that automatically generates Dockerfiles for GitHub repositories using AI.  
It analyzes repository code, detects the tech stack, generates an optimized Dockerfile, builds the image, and provides build history — all through an interactive UI.

---

## 🚀 Features

### Frontend
- 🤖 AI-powered Dockerfile generation (React, Next.js, Vue, Angular)
- 🧩 Tech stack detection from GitHub repositories
- 📦 One-click Docker image build
- 🕒 Real-time build tracking and progress updates
- 💾 Download, copy, or push generated Dockerfiles
- 💡 Responsive UI with light/dark mode

### Backend
- 🧠 AI Agent using **Google Gemini 2.0 Flash**
- 🐳 Docker image building using **Docker API**
- 📊 MongoDB for history and analytics
- 🔍 GitHub API integration
- ⚙️ TypeScript + Express.js backend
- 🔒 Secure CORS + Token validation

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js + TypeScript + Tailwind CSS + Shadcn/UI |
| **Backend** | Node.js + Express.js + TypeScript |
| **Database** | MongoDB + Mongoose |
| **AI** | Google Gemini 2.0 Flash via LangChain.js |
| **Containerization** | Docker |
| **Deployment** | Render (Frontend + Backend) |

---

## 📁 Project Structure

```
DockGen-AI/
├── frontend/ # Next.js frontend
│ ├── src/
│ ├── package.json
│ ├── Dockerfile
│ └── README.md
├── backend/ # Node.js + Express backend
│ ├── src/
│ ├── package.json
│ ├── Dockerfile
│ └── README.md
└── README.md # (You are here)
```


---

## ⚡ Quick Start (Local Setup)

### 🧩 Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Docker
- Google Gemini API key
- GitHub Personal Access Token

---

### 🧱 Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

---

### .env

```
GEMINI_API_KEY=your_gemini_api_key_here
MONGODB_URI=your_mongodb_uri_here
GITHUB_TOKEN=your_github_token_here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```


----
### Run locally:
```
npm run dev
```

---
### Test backend:
```
http://localhost:3001/health
```
---
## 📊 Architecture Overview

### 🧠 AI Agent Workflow
1. **Fetch GitHub Repository**  
2. **Detect Tech Stack**  
3. **Generate Optimized Dockerfile**  
4. **Build Docker Image**  
5. **Store History in MongoDB**  
6. **Return Results via REST API**

---

### 🔗 Frontend–Backend Integration
- **API base URL:** `https://nodeapp-ww3l.onrender.com/api`  
- **CORS enabled for:** `https://nodeapp-1-4o66.onrender.com`

---

## 🛡️ Security
- ✅ **CORS whitelisted origins**
- 🔐 **Sanitized error handling**
- 🧱 **GitHub token validation**
- 🕵️ **Input validation**
- ⚡ **HTTPS communication (Render)**

---

## 📷 Screenshots (Suggested)
- 🧩 Frontend UI (Home + Result)
- 🐳 Dockerfile output preview
- ⚙️ Render dashboard showing live deployments

---

## 🧾 Author
**Developed by:** [Indar Gehalot](mailto:indargehalot1234@example.com)  
🚀 AI Developer | 🐳 Docker Enthusiast | 💻 Full-Stack Engineer  

📧 **Email:** [indargehalot1234@example.com](mailto:indargehalot1234@example.com)

---

## 🏁 Conclusion

**DockGen AI** simplifies the Dockerization process using **AI-driven automation**.  
It’s a full-stack, production-ready system for developers to:

- 🔍 Analyze repositories  
- ⚙️ Generate Dockerfiles  
- 🐳 Build Docker images  
- 🚀 Deploy effortlessly  

---



