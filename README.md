# Full-Stack Authentication App

A complete login and logout flow implementation using React.js (frontend) and Node.js + Express.js (backend) with SQLite database.

## Features

- **Backend**: Node.js + Express.js with SQLite, bcrypt password hashing, express-session management
- **Frontend**: React.js with React Router for navigation and Axios for API calls
- **Authentication**: Secure user registration, login, logout with session management
- **Protected Routes**: Dashboard accessible only to authenticated users
- **Responsive Design**: Mobile-friendly interface

## Project Structure

\`\`\`
project-root/
├── backend/
│   ├── server.js              # Express server setup
│   ├── db.js                  # SQLite database configuration
│   ├── routes/
│   │   └── auth.js            # Authentication routes
│   ├── middleware/
│   │   └── auth.js            # Authentication middleware
│   └── package.json           # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js             # Main React app with routing
│   │   ├── index.js           # React app entry point
│   │   ├── App.css            # Application styles
│   │   └── components/
│   │       ├── Login.js       # Login form component
│   │       ├── Register.js    # Registration form component
│   │       └── Dashboard.js   # Protected dashboard component
│   ├── public/
│   │   └── index.html         # HTML template
│   └── package.json           # Frontend dependencies
└── README.md                  # This file
\`\`\`

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory:**
   \`\`\`bash
   cd backend
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the backend server:**
   \`\`\`bash
   # Development mode with auto-restart
   npm run dev
   
   # Or production mode
   npm start
   \`\`\`

   The backend server will start on `http://localhost:5000`

### Frontend Setup

1. **Open a new terminal and navigate to frontend directory:**
   \`\`\`bash
   cd frontend
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the React development server:**
   \`\`\`bash
   npm start
   \`\`\`

   The frontend will start on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate user and create session
- `GET /api/auth/me` - Get current logged-in user (protected)
- `POST /api/auth/logout` - Destroy session and logout user

### Request/Response Examples

**Register User:**
\`\`\`bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

**Login User:**
\`\`\`bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

## Usage Flow

1. **Registration**: New users can create an account at `/register`
2. **Login**: Existing users can log in at `/login`
3. **Dashboard**: Authenticated users are redirected to `/dashboard`
4. **Logout**: Users can logout from the dashboard
5. **Protection**: Unauthenticated users are redirected to login page

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt with salt rounds
- **Session Management**: Express-session with secure cookie configuration
- **CORS Protection**: Configured for frontend-backend communication
- **Route Protection**: Middleware prevents unauthorized access to protected routes
- **Input Validation**: Email and password validation on both frontend and backend

## Database Schema

The SQLite database (`users.db`) contains a single `users` table:

\`\`\`sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Development Notes

- Backend runs on port 5000
- Frontend runs on port 3000
- CORS is configured to allow credentials between frontend and backend
- Sessions are stored in memory (use a session store like Redis for production)
- SQLite database file is created automatically when the server starts

## Production Deployment

For production deployment, consider:

1. **Environment Variables**: Use environment variables for sensitive configuration
2. **Session Store**: Implement Redis or database session storage
3. **HTTPS**: Enable HTTPS and set secure cookie flags
4. **Database**: Consider PostgreSQL or MySQL for production
5. **Process Management**: Use PM2 or similar for process management

## Troubleshooting

**Common Issues:**

1. **CORS Errors**: Ensure backend is running on port 5000 and frontend on port 3000
2. **Session Issues**: Check that cookies are enabled in browser
3. **Database Errors**: Ensure write permissions in backend directory for SQLite file
4. **Port Conflicts**: Change ports in configuration if 3000/5000 are in use

**Reset Database:**
\`\`\`bash
cd backend
rm users.db
# Restart server to recreate database
\`\`\`

## License

This project is for educational purposes and assignment submission.
