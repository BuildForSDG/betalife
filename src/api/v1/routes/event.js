import { Router } from 'express';

import { ensureLoggedInMiddleware, ensureUserIsOrganiser } from './middleware/auth';
import { createEvent, getAllEvents, getEventsBySponsor } from '../controllers/event';
import { getLoggedInUser } from '../stores/session';

const router = Router();

router.get(
  '/me',
  ensureLoggedInMiddleware,
  ensureUserIsOrganiser,
  async function getAllEventsRoute(req, res) {
    const sponsor = getLoggedInUser();

    try {
      const events = await getEventsBySponsor(sponsor.id);
      res.status(200).json({ data: events });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.post(
  '/',
  ensureLoggedInMiddleware,
  ensureUserIsOrganiser,
  async function createEventsRoute(req, res) {
    const input = req.body;

    try {
      const event = await createEvent(input);
      res.status(201).json({ data: event });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.get('/', async function getAllEventsRoute(req, res) {
  try {
    const events = await getAllEvents();
    res.status(200).json({ data: events });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
