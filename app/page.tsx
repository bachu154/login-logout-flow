export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Full-Stack Authentication System</h1>

          <p className="text-lg text-gray-600 mb-8">
            This project contains a complete authentication system with Node.js/Express backend and React frontend. The
            system includes user registration, login, logout, and protected routes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Backend Features</h3>
              <ul className="text-blue-700 space-y-2 text-left">
                <li>• Express.js server with SQLite database</li>
                <li>• Bcrypt password hashing</li>
                <li>• Session-based authentication</li>
                <li>• Protected API routes</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Frontend Features</h3>
              <ul className="text-green-700 space-y-2 text-left">
                <li>• React with React Router</li>
                <li>• Login and Registration forms</li>
                <li>• Protected dashboard route</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              To run this application locally, follow the setup instructions in the README.md file:
            </p>
            <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm text-left">
              <div>1. Install backend dependencies: cd backend && npm install</div>
              <div>2. Install frontend dependencies: cd frontend && npm install</div>
              <div>3. Start backend server: cd backend && npm start</div>
              <div>4. Start frontend server: cd frontend && npm start</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Backend runs on port 5000 | Frontend runs on port 3000</p>
          </div>
        </div>
      </div>
    </main>
  )
}
