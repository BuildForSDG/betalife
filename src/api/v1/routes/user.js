import { Router } from 'express';

import { getUserById, updateUserProfile } from '../controllers/user';
import { getLoggedInUser } from '../stores/session';

const router = Router();

router.get('/profile/me', async function getUserProfileRoute(req, res) {
  const user = getLoggedInUser();

  try {
    const userProfile = await getUserById(user.id);

    if (userProfile.id !== user.id) {
      res.status(403).json({ message: 'forbidden action' });

      return;
    }

    res.status(200).json({ data: { userProfile } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/profile/me', async function updateUserProfileRoute(req, res) {
  const newUserData = req.body;

  try {
    const userProfile = await updateUserProfile(newUserData);
    res.status(200).json({ data: userProfile });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
