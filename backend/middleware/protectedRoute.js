import jwt from 'jsonwebtoken';

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('Error in the protectedRoute middleware:', error);
    res.status(401).json({ message: "Invalid token." });
  }
};

export default protectedRoute;
