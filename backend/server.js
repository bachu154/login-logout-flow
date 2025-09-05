const express = require("express")
const session = require("express-session")
const SQLiteStore = require("connect-sqlite3")(session)
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRoutes = require("./routes/auth")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // React app URL
    credentials: true,
  }),
)

app.use(express.json())
app.use(cookieParser())

// Session configuration
app.use(
  session({
    store: new SQLiteStore({
      db: "sessions.db",
      dir: "./backend/data",
    }),
    secret: "your-secret-key-change-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days for persistence
    },
  }),
)

// Routes
app.use("/api/auth", authRoutes)

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
