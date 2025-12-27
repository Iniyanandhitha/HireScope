# HireScope - AI-Powered Resume Analysis Platform

HireScope is a comprehensive resume and job description matching platform that uses AI to help job seekers optimize their resumes and improve their chances of landing their dream job.

## 🌟 Features

### 🔐 Authentication & Security
- **JWT Authentication**: Secure login with access and refresh tokens
- **Password Security**: Bcrypt hashing with salt rounds
- **Session Management**: Multi-device login support
- **Rate Limiting**: Protection against abuse

### 📄 Resume Management
- **PDF Upload**: Drag-and-drop PDF resume upload
- **Text Extraction**: Automatic text parsing from PDF files
- **Skill Detection**: AI-powered skill identification
- **Experience Parsing**: Automatic work history extraction
- **Education Analysis**: Degree and certification detection

### 🎯 AI-Powered Analysis
- **Smart Matching**: Advanced algorithm for resume-job matching
- **Percentage Scoring**: Detailed match percentages for different categories
- **Skill Gap Analysis**: Identify missing skills and requirements
- **Keyword Optimization**: ATS-friendly keyword suggestions
- **Visual Analytics**: Interactive charts and graphs

### 🤖 Intelligent Chatbot
- **Context-Aware AI**: GPT-3.5-turbo powered assistant
- **Real-Time Chat**: Socket.IO for instant messaging
- **Career Advice**: Personalized recommendations
- **Resume Improvement**: AI-generated resume enhancements
- **Interview Prep**: Tips and guidance for interviews

### 📊 Dashboard & Analytics
- **Performance Tracking**: Monitor your application success
- **Skill Analytics**: Track skill frequency and trends
- **Match History**: View all previous analyses
- **Progress Insights**: Understand your improvement over time

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **State Management**: React Query for server state
- **Routing**: React Router DOM
- **Charts**: Recharts for data visualization

### Backend (Node.js + Express)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with middleware
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with refresh tokens
- **File Processing**: Multer + PDF-Parse
- **AI Integration**: OpenAI GPT-3.5-turbo
- **Real-time**: Socket.IO for chat
- **NLP**: Natural.js for text processing

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB
- OpenAI API Key

### Installation

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd hirescope
   npm run setup
   ```

2. **Configure environment**
   ```bash
   # Edit backend/.env with your settings
   cp backend/.env.example backend/.env
   ```

3. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev:full
   
   # Or start individually
   npm run dev:backend  # Backend on :5000
   npm run dev          # Frontend on :5173
   ```

### Environment Configuration

Edit `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/hirescope
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=your-openai-api-key
```

## 📱 Usage

1. **Register/Login**: Create an account or sign in
2. **Upload Resume**: Drag and drop your PDF resume
3. **Add Job Description**: Paste the job posting you're interested in
4. **Analyze Match**: Get detailed matching analysis with scores
5. **Chat with AI**: Ask questions and get personalized advice
6. **Improve Resume**: Get AI-generated resume improvements
7. **Track Progress**: Monitor your applications and improvements

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Dark/Light Mode**: Automatic theme switching
- **Responsive**: Works on desktop, tablet, and mobile
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant components
- **Loading States**: Skeleton loaders and progress indicators

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Token refresh
- `GET /api/auth/me` - Get current user

### Resume Management
- `POST /api/resume/upload` - Upload resume
- `GET /api/resume` - List user resumes
- `GET /api/resume/:id` - Get specific resume
- `DELETE /api/resume/:id` - Delete resume

### Analysis
- `POST /api/analysis/analyze` - Analyze resume vs job
- `GET /api/analysis` - List analyses
- `GET /api/analysis/:id` - Get specific analysis
- `POST /api/analysis/:id/improve-resume` - Generate improvements

### Chat
- `POST /api/chat/message` - Send message
- `GET /api/chat/sessions` - List chat sessions
- `GET /api/chat/sessions/:id` - Get session messages

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests (if implemented)
npm test
```

## 🚀 Deployment

### Backend Deployment
```bash
cd backend
npm run build
npm start
```

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting platform
```

### Recommended Platforms
- **Backend**: Railway, Render, DigitalOcean
- **Frontend**: Vercel, Netlify
- **Database**: MongoDB Atlas

## 🔒 Security

- JWT tokens with secure secrets
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting for API endpoints
- CORS protection
- File upload restrictions
- Environment variable protection

## 📊 Performance

- Optimized PDF processing
- Efficient database queries with indexes
- Image optimization and lazy loading
- Code splitting and tree shaking
- Caching strategies
- Compression middleware

## 🛠️ Development

### Project Structure
```
hirescope/
├── src/                     # Frontend source
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilities
├── backend/                # Backend source
│   ├── src/
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── middleware/     # Express middleware
│   └── uploads/            # File storage
└── docs/                   # Documentation
```

### Development Scripts
```bash
npm run dev:full            # Start both servers
npm run build:full          # Build both projects
npm run setup               # Initial project setup
npm run lint                # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for GPT-3.5-turbo API
- shadcn/ui for beautiful components
- Tailwind CSS for styling system
- MongoDB for database solution
- All open-source contributors

## 📞 Support

For support, email support@hirescope.com or join our Discord community.

---

**Built with ❤️ for job seekers everywhere**