const express = require("express")
const bcrypt = require("bcrypt")
const db = require("../db")
const { requireAuth } = require("../middleware/auth")
const router = express.Router()

// Register new user
router.post("/register", async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" })
  }

  try {
    // Check if user already exists
    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
      if (err) {
        return res.status(500).json({ error: "Database error" })
      }

      if (user) {
        return res.status(400).json({ error: "User already exists" })
      }

      // Hash password
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      // Insert new user
      db.run("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], function (err) {
        if (err) {
          return res.status(500).json({ error: "Failed to create user" })
        }

        res.status(201).json({
          message: "User created successfully",
          userId: this.lastID,
        })
      })
    })
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})

// Login user
router.post("/login", (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" })
  }

  // Find user by email
  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Database error" })
    }

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    try {
      // Compare password
      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid credentials" })
      }

      // Create session
      req.session.userId = user.id
      req.session.userEmail = user.email

      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
        },
      })
    } catch (error) {
      res.status(500).json({ error: "Server error" })
    }
  })
})

// Get current user - protected route
router.get("/me", requireAuth, (req, res) => {
  db.get("SELECT id, email FROM users WHERE id = ?", [req.session.userId], (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Database error" })
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    res.json({ user })
  })
})

// Logout user
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" })
    }

    res.clearCookie("connect.sid")
    res.json({ message: "Logout successful" })
  })
})

module.exports = router
