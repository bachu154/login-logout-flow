// Authentication middleware to protect routes
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      error: "Authentication required",
      message: "Please log in to access this resource",
    })
  }
  next()
}

// Optional auth middleware - doesn't block if not authenticated
const optionalAuth = (req, res, next) => {
  // Just adds user info to request if available
  if (req.session.userId) {
    req.user = {
      id: req.session.userId,
      email: req.session.userEmail,
    }
  }
  next()
}

module.exports = {
  requireAuth,
  optionalAuth,
}
