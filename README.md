# DR Leads Platform

A comprehensive lead processing platform with authentication, dashboard, and lead management capabilities.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL (AWS RDS)
- **ORM**: Prisma
- **Authentication**: JWT
- **Deployment**: Vercel (Frontend) + Railway/Render (Backend)

## 📁 Project Structure

```
dr-leads/
├── frontend/          # React application
│   ├── src/
│   ├── package.json
│   └── vercel.json
└── backend/           # Node.js API
    ├── src/
    ├── prisma/
    └── package.json
```

## 🛠️ Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## 🌐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001/api
```

### Backend (.env)
```
DATABASE_URL="postgresql://username:password@host:port/database"
JWT_SECRET="your-jwt-secret"
PORT=3001
NODE_ENV=development
```

## 🚀 Deployment

- **Frontend**: Auto-deployed to Vercel on push to main
- **Backend**: Deploy to Railway, Render, or similar service
- **Database**: AWS RDS PostgreSQL

## ✨ Features

- ✅ User Authentication (JWT)
- ✅ Responsive Dashboard with Metrics
- ✅ Color-coded Analytics Cards
- ✅ Date Range Filtering
- 🔄 Lead Management (Coming Soon)
- 🔄 Credit Check Integration (Coming Soon)
- 🔄 CRM Integration (Coming Soon)