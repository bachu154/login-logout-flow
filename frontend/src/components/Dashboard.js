"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Dashboard = ({ user, onLogout }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await axios.post("/api/auth/logout")
      onLogout()
      navigate("/login")
    } catch (error) {
      console.error("Logout error:", error)
      // Force logout even if API call fails
      onLogout()
      navigate("/login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout} disabled={loading} className="logout-button">
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
      <div className="dashboard-content">
        <div className="user-info">
          <h2>User Information</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>User ID:</strong> {user.id}
          </p>
        </div>
        <div className="dashboard-features">
          <h3>Dashboard Features</h3>
          <ul>
            <li>✅ Secure authentication</li>
            <li>✅ Session management</li>
            <li>✅ Protected routes</li>
            <li>✅ User profile display</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
