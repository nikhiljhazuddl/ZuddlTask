# 🚀 Quick Start Commands

## Push to GitHub (First Time)

```bash
# Navigate to project root
cd d:\PM\Task-Manager-Tutorial-main

# Initialize Git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Zuddl Task Management System"

# Add remote repository
git remote add origin https://github.com/nikhiljhazuddl/ZuddlTask.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Update GitHub (After Changes)

```bash
git add .
git commit -m "Your commit message here"
git push
```

## Deploy Frontend to Vercel

```bash
# Install Vercel CLI (one time)
npm install -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel

# For production deployment
vercel --prod
```

## Deploy Backend to Render

1. Go to https://render.com
2. Create New Web Service
3. Connect GitHub repo
4. Select `backend` directory
5. Add environment variables
6. Deploy!

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Setup

### Backend .env
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_JOIN_CODE=123456
FRONT_END_URL=http://localhost:5173
```

## Production URLs (After Deployment)

- Frontend: https://your-app.vercel.app
- Backend: https://your-api.onrender.com
- Update FRONT_END_URL in Render to match Vercel URL

## Troubleshooting

### Git Issues
```bash
# If remote already exists
git remote remove origin
git remote add origin https://github.com/nikhiljhazuddl/ZuddlTask.git

# Force push (use carefully!)
git push -f origin main
```

### Clear Git Cache
```bash
git rm -r --cached .
git add .
git commit -m "Clean up ignored files"
```

## Important Notes

✅ Never commit .env files
✅ Update CORS URLs after deployment
✅ Test locally before pushing
✅ Use meaningful commit messages
