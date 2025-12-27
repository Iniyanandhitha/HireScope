# HireScope - Complete Setup Guide

This guide will help you set up the complete HireScope application with both frontend and backend.

## 🏗️ Project Structure

```
hirescope/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/                  # Node.js + Express backend
│   ├── src/
│   ├── package.json
│   └── ...
└── SETUP_GUIDE.md           # This file
```

## 📋 Prerequisites

Before starting, make sure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
3. **OpenAI API Key** - [Get one here](https://platform.openai.com/api-keys)
4. **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env file with your configuration
# Required: MONGODB_URI, JWT_SECRET, OPENAI_API_KEY
```

**Configure your `.env` file:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/hirescope
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRES_IN=30d
OPENAI_API_KEY=your-openai-api-key-here
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
FRONTEND_URL=http://localhost:5173
```

```bash
# Start MongoDB (if not running as service)
mongod

# Start backend development server
npm run dev
```

The backend will be running at `http://localhost:5000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd ../

# Install dependencies
npm install

# Start frontend development server
npm run dev
```

The frontend will be running at `http://localhost:5173`

## 🔧 Detailed Configuration

### MongoDB Setup

#### Option 1: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (with Homebrew)
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

### OpenAI API Setup

1. Sign up at [OpenAI Platform](https://platform.openai.com/)
2. Navigate to API Keys section
3. Create a new API key
4. Add it to your `.env` file as `OPENAI_API_KEY`

**Note**: OpenAI API usage incurs costs. Monitor your usage in the OpenAI dashboard.

### JWT Secret Generation

Generate secure JWT secrets:

```bash
# Generate random JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Use the output for `JWT_SECRET` and `JWT_REFRESH_SECRET` in your `.env` file.

## 🧪 Testing the Setup

### 1. Test Backend API

```bash
# Health check
curl http://localhost:5000/health

# Expected response:
# {"status":"OK","timestamp":"...","uptime":...}
```

### 2. Test Frontend

1. Open `http://localhost:5173` in your browser
2. You should see the HireScope landing page
3. Try navigating to different pages

### 3. Test Full Integration

1. Register a new account
2. Upload a PDF resume
3. Paste a job description
4. Run analysis
5. Try the chat feature

## 📁 File Upload Configuration

The backend handles PDF resume uploads with these settings:

- **Max file size**: 10MB (configurable via `MAX_FILE_SIZE`)
- **Allowed formats**: PDF only
- **Storage**: Local filesystem in `backend/uploads/`
- **Processing**: Automatic text extraction and skill detection

## 🔒 Security Considerations

### Development
- Use strong JWT secrets
- Keep `.env` files out of version control
- Use HTTPS in production

### Production
- Set `NODE_ENV=production`
- Use environment-specific secrets
- Configure proper CORS origins
- Set up rate limiting
- Use a reverse proxy (nginx)
- Enable MongoDB authentication

## 🚀 Production Deployment

### Backend Deployment

1. **Build the application**
   ```bash
   cd backend
   npm run build
   ```

2. **Set production environment variables**
   ```bash
   export NODE_ENV=production
   export MONGODB_URI=your-production-mongodb-uri
   export JWT_SECRET=your-production-jwt-secret
   # ... other variables
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

### Frontend Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to static hosting** (Vercel, Netlify, etc.)
   - Upload the `dist` folder
   - Configure environment variables
   - Set up custom domain (optional)

### Recommended Hosting Platforms

**Backend:**
- Railway
- Render
- DigitalOcean App Platform
- AWS Elastic Beanstalk
- Heroku

**Frontend:**
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

**Database:**
- MongoDB Atlas
- AWS DocumentDB
- DigitalOcean Managed MongoDB

## 🛠️ Development Workflow

### Backend Development
```bash
cd backend
npm run dev          # Start with hot reload
npm run build        # Build TypeScript
npm run test         # Run tests
```

### Frontend Development
```bash
npm run dev          # Start with hot reload
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📊 Features Overview

### ✅ Implemented Features

**Authentication & Authorization:**
- JWT-based authentication
- User registration and login
- Password hashing and validation
- Refresh token rotation
- Session management

**Resume Management:**
- PDF upload and processing
- Text extraction from PDFs
- Automatic skill detection
- Experience and education parsing
- Resume storage and retrieval

**AI-Powered Analysis:**
- Resume-Job Description matching
- Skill gap analysis
- Keyword optimization
- Match percentage calculation
- AI-generated insights

**Intelligent Chatbot:**
- Context-aware conversations
- Real-time messaging with Socket.IO
- Session management
- Analysis-specific advice

**Dashboard & Analytics:**
- User dashboard with statistics
- Match score analytics
- Skill frequency analysis
- Recent activity tracking

### 🔮 Future Enhancements

- Email notifications
- Resume templates
- Bulk analysis
- Team collaboration
- Advanced analytics
- Mobile app
- Integration with job boards

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB is running
- Verify `.env` configuration
- Check port 5000 is available

**Frontend can't connect to backend:**
- Verify backend is running on port 5000
- Check CORS configuration
- Verify `FRONTEND_URL` in backend `.env`

**File upload fails:**
- Check `uploads` directory exists and is writable
- Verify file size limits
- Ensure PDF format

**AI features not working:**
- Verify OpenAI API key is valid
- Check API usage limits
- Monitor OpenAI API status

### Getting Help

1. Check the console for error messages
2. Review the logs in `backend/logs/`
3. Verify all environment variables are set
4. Test API endpoints individually
5. Check MongoDB connection

## 📝 API Documentation

The backend provides a comprehensive REST API. Key endpoints:

- **Authentication**: `/api/auth/*`
- **Resume Management**: `/api/resume/*`
- **Analysis**: `/api/analysis/*`
- **Chat**: `/api/chat/*`
- **User Management**: `/api/user/*`

For detailed API documentation, see `backend/README.md`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Need help?** Check the individual README files in the `backend/` directory for more detailed information about specific components.