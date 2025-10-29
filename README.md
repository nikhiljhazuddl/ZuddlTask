# Zuddl Task - Team Task Management System

A modern, full-stack task management application built for team collaboration.

## 🚀 Features

- **User Authentication** - Secure login and signup
- **Admin Dashboard** - Complete task management and team oversight
- **My Tasks** - Personal task view for team members
- **Task Assignment** - Assign tasks to multiple team members
- **Task Tracking** - Monitor progress with status updates and todo checklists
- **Team Management** - View and manage team members
- **Reports** - Download task and user reports
- **Modern UI** - Clean, responsive design with glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS 4
- Redux Toolkit
- React Router
- Axios
- Recharts

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Multer (File uploads)
- bcryptjs

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_JOIN_CODE=123456
FRONT_END_URL=http://localhost:5173

npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🌐 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
JWT_SECRET=your_secret_key
ADMIN_JOIN_CODE=123456
FRONT_END_URL=http://localhost:5173
```

## 🔐 Default Admin Access

Admin Invite Token: `123456`

## 📝 Usage

1. **Sign Up**: Create an account (everyone gets admin access by default)
2. **Create Tasks**: Add new tasks with assignees, deadlines, and checklists
3. **Manage Tasks**: View and update task status
4. **Track Progress**: Monitor team member task completion
5. **Download Reports**: Export task and user data

## 🎨 Features Highlight

- **Glassmorphism UI** - Modern, frosted glass design
- **Animated Backgrounds** - Subtle floating elements
- **Responsive Design** - Works on all devices
- **Real-time Updates** - Task status and progress tracking
- **File Attachments** - Upload task-related files
- **Priority Levels** - Low, Medium, High task priorities

## 📱 Screenshots

(Add screenshots here)

## 🚀 Deployment

### Vercel (Frontend)
```bash
cd frontend
vercel
```

### Render/Railway (Backend)
- Connect GitHub repository
- Set environment variables
- Deploy

## 👥 Team

Built with ❤️ by Dinesh's Team

## 📄 License

MIT License
