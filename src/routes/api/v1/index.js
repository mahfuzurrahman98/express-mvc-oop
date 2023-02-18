import { Router } from 'express';
// import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';

import authRoutes from './authRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;