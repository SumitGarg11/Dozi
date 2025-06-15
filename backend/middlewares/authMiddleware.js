const jwt = require("jsonwebtoken");
const User = require("../models/User");
// middleware to protect route

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.User = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "Not Authorized, no token" });
    }
  } catch (err) {
    res.status(401).json({ message: "Token Failed", error: err.message });
  }
};

// Middleware  for only admin acess
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};
module.exports = { protect, adminOnly };
