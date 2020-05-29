import { Router } from 'express';

import AuthRouter from './routes/auth';

const router = Router();

router.use('/auth', AuthRouter);

export default router;
