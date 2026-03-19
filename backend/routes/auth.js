const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');

const router = express.Router();

/* ── POST /api/auth/register ── */
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });
    if (password.length < 6)
      return res.status(400).json({ message: 'Password must be at least 6 characters' });

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing)
      return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user   = await User.create({ email: email.toLowerCase().trim(), password: hashed });

    res.status(201).json({ message: 'Account created', userId: user._id });
  } catch (err) {
    console.error('[register]', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/* ── POST /api/auth/login ── */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'changeme',
      { expiresIn: '1d' }
    );

    res.json({ message: 'Login successful', token, email: user.email, userId: user._id });
  } catch (err) {
    console.error('[login]', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/* ── GET /api/auth/me  (protected) ── */
router.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer '))
      return res.status(401).json({ message: 'Unauthorised' });

    const token   = authHeader.slice(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const user    = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ email: user.email, userId: user._id });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
