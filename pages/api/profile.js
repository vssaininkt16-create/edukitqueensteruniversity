import jwt from 'jsonwebtoken';
import connectDB from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Support both cookie-based auth (httpOnly) and Bearer token
    let token = null;

    const cookieHeader = req.headers.cookie || '';
    const cookieMatch  = cookieHeader.match(/auth_token=([^;]+)/);
    if (cookieMatch) token = cookieMatch[1];

    if (!token) {
      const auth = req.headers.authorization || '';
      if (auth.startsWith('Bearer ')) token = auth.slice(7);
    }

    if (!token) return res.status(401).json({ message: 'Not authenticated' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');

    await connectDB();
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ email: user.email, userId: user._id });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired session' });
  }
}
