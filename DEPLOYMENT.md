# 🚀 Deployment Guide - Zuddl Task

## Step 1: Push to GitHub

### Initialize Git (if not already done)
```bash
cd d:\PM\Task-Manager-Tutorial-main
git init
git add .
git commit -m "Initial commit - Zuddl Task Management System"
```

### Connect to GitHub Repository
```bash
git remote add origin https://github.com/nikhiljhazuddl/ZuddlTask.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend (Render.com - Recommended)

### Why Render?
- Free tier available
- Easy MongoDB integration
- Better for Node.js backends than Vercel

### Steps:

1. **Go to [render.com](https://render.com)**
2. **Sign up/Login** with GitHub
3. **Click "New +"** → **"Web Service"**
4. **Connect Repository**: `nikhiljhazuddl/ZuddlTask`
5. **Configure:**
   - Name: `zuddl-task-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   
6. **Add Environment Variables:**
   ```
   MONGO_URI=mongodb+srv://your_connection_string
   JWT_SECRET=your_secret_key_here
   ADMIN_JOIN_CODE=123456
   FRONT_END_URL=https://your-frontend-url.vercel.app
   ```

7. **Click "Create Web Service"**

8. **Copy your backend URL** (e.g., `https://zuddl-task-backend.onrender.com`)

---

## Step 3: Deploy Frontend (Vercel - Recommended)

### Why Vercel?
- Built for React/Vite apps
- Automatic deployments
- Free SSL

### Steps:

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "Add New"** → **"Project"**
4. **Import** `nikhiljhazuddl/ZuddlTask`
5. **Configure:**
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   
6. **Environment Variables:**
   - Not needed if using default setup
   - If you have API URL in env, add it here

7. **Click "Deploy"**

8. **Copy your frontend URL** (e.g., `https://zuddl-task.vercel.app`)

---

## Step 4: Update Backend CORS

After deployment, update your backend `.env` file on Render:

```env
FRONT_END_URL=https://zuddl-task.vercel.app
```

This ensures CORS works correctly.

---

## Step 5: Update Frontend API URL

If needed, update the axios base URL in:
`frontend/src/utils/axioInstance.js`

```javascript
const BASE_URL = "https://zuddl-task-backend.onrender.com/api"
```

Then commit and push:
```bash
git add .
git commit -m "Update API URL for production"
git push
```

Vercel will automatically redeploy.

---

## Alternative: Both on Vercel

### Backend on Vercel
- Works but has limitations (serverless functions)
- File uploads might not persist
- Better to use Render/Railway for backend

### If using Vercel for backend:
1. Deploy backend as separate project
2. Use Vercel serverless functions
3. Note: May need to adjust file upload handling

---

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas database is ready
- [ ] Environment variables are set correctly
- [ ] CORS settings match frontend URL
- [ ] Backend .env has correct FRONT_END_URL
- [ ] Code is pushed to GitHub
- [ ] No hardcoded secrets in code
- [ ] .gitignore is properly configured

---

## 🔧 Troubleshooting

### CORS Errors
- Ensure `FRONT_END_URL` in backend matches your Vercel URL exactly
- No trailing slash in URL

### MongoDB Connection Issues
- Check MongoDB Atlas IP whitelist (add 0.0.0.0/0 for all IPs)
- Verify connection string is correct
- Ensure database user has proper permissions

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check build logs for specific errors

---

## 🎉 Success!

Once deployed:
1. Visit your frontend URL
2. Sign up with admin token: `123456`
3. Start managing tasks!

**Frontend**: https://zuddl-task.vercel.app
**Backend**: https://zuddl-task-backend.onrender.com

---

## 📱 Share Your App

Share the frontend URL with your team:
`https://zuddl-task.vercel.app`

Admin Token for signup: `123456`

---

Need help? Check the main README.md or create an issue on GitHub!
