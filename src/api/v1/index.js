import { Router } from 'express';

import AuthRouter from './routes/auth';
import AdminRouter from './routes/admin';
import UserRouter from './routes/user';
import EventRouter from './routes/event';
import {
  ensureLoggedInMiddleware,
  ensureUserIsAdmin
} from './routes/middleware/auth';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/admins', ensureLoggedInMiddleware, ensureUserIsAdmin, AdminRouter);
router.use('/users', ensureLoggedInMiddleware, UserRouter);
router.use('/events', EventRouter);

export default router;
