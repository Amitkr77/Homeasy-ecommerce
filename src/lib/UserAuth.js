// @/lib/userAuth.js
import jwt from 'jsonwebtoken';
import { dbConnect } from './dbConnect';
import User from '@/models/User'; // Assuming you have a User model

// Secret key for JWT (use env var in production)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// Helper to get token from request (supports Authorization header or cookies)
function getTokenFromReq(req) {
  // Try Authorization header first (Bearer token)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  // Fallback to cookie (if using httpOnly cookie for token)
  if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  }
  return null;
}

// Main function to get current user from request
export default async function getCurrentUser(req) {
  try {
    const token = getTokenFromReq(req);
    if (!token) {
      return { error: 'No authentication token provided' };
    }

    // Verify JWT
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId || decoded.id; // Adjust based on your JWT payload

    if (!userId) {
      return { error: 'Invalid token payload' };
    }

    // Connect to DB and fetch user (optional: for validation or extra data)
    await dbConnect();
    const user = await User.findById(userId).select('_id email role'); // Select minimal fields
    if (!user) {
      return { error: 'User not found' };
    }

    return { userId, user }; // Return userId and full user doc if needed
  } catch (error) {
    console.error('Auth error:', error);
    if (error.name === 'JsonWebTokenError') {
      return { error: 'Invalid token' };
    }
    if (error.name === 'TokenExpiredError') {
      return { error: 'Token expired' };
    }
    return { error: 'Authentication failed' };
  }
}

// Optional: verifyAdmin (as referenced earlier, extends getCurrentUser)
export async function verifyAdmin(req) {
  const result = await getCurrentUser(req);
  if (result.error) {
    return { error: result.error };
  }
  if (result.user.role !== 'admin') {
    return { error: 'Admin access required' };
  }
  return { userId: result.userId, user: result.user };
}

// Optional: Helper to generate JWT (use on login/signup)
export function generateToken(userId, role = 'user') {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' }); // 7 days expiry
}