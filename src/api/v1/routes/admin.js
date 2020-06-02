import { Router } from 'express';

import {
  upgradeUserToOrganiser,
  upgradeUserToSponsor
} from '../controllers/admin-user';

const router = Router();

router.post(
  '/user/sponsor/:userId/upgrade',
  async function upgradeUserToSponsorRoute(req, res) {
    const { userId } = req.params;

    try {
      const sponsor = await upgradeUserToSponsor(userId);
      res.status(201).json({ data: sponsor });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.post(
  '/user/organiser/:userId/upgrade',
  async function upgradeUserToOrganiserRoute(req, res) {
    const { userId } = req.params;

    try {
      const organiser = await upgradeUserToOrganiser(userId);
      res.status(201).json({ data: organiser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

export default router;
