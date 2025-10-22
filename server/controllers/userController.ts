import { Request, Response } from 'express';
import User from '../models/User';
import crypto from 'crypto';
import { sendVerificationEmail } from '../config/nodemailer'; // We will create this next

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const verificationToken = crypto.randomBytes(20).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 3600000); // 1 hour

  const user = await User.create({
    email,
    password,
    verificationToken,
    verificationTokenExpires,
  });

  if (user) {
    await sendVerificationEmail(user.email, verificationToken);
    res.status(201).json({
      message: 'User registered successfully. Please check your email for verification.',
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

export { registerUser };