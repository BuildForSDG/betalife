import { Router } from 'express';

import { signUp, login } from '../controllers/auth';

const router = Router();

router.post('/signup', async function signUpRoute(req, res) {
  const data = req.body;

  try {
    const token = await signUp(data);
    res.status(201).json({ data: { token } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async function loginRoute(req, res) {
  const data = req.body;

  try {
    const token = await login(data);
    res.status(200).json({ data: { token } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
