import { Router } from 'express';

import version1Router from './v1';
import version2Router from './v2';

const router = Router();

router.use('/', version1Router);
router.use('/v1', version1Router);
router.use('/v2', version2Router);

export default router;
