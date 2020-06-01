import jwt from 'jsonwebtoken';

import {
  session,
  setLoggedInUser,
  getLoggedInUser,
  setUserIsAdmin,
  setUserIsSponsor,
  setUserIsOrganiser,
  setUserIsSuperAdmin
} from '../../stores/session';

function getToken(req) {
  let token;

  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');

    if (parts.length !== 2) {
      return null;
    }

    const scheme = parts[0];
    const credentials = parts[1];

    if (/^Bearer$/i.test(scheme)) {
      token = credentials;
    } else {
      return null;
    }
  }

  return token;
}

export function ensureLoggedInMiddleware(req, res, next) {
  const token = getToken(req);

  if (!token) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  if (!process.env.ACCESS_TOKEN_SECRET) {
    res.status(500).json({ message: 'Server error, please try again later' });
    return;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      if (err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: 'Token expired' });
        return;
      }

      res.status(401).json({ message: 'Please login' });
      return;
    }

    const { id, role, roleId } = payload;

    session.run(function () {
      setLoggedInUser({ id, role, roleId });
      next();
    });
  });
}

export function ensureUserIsAdmin(req, res, next) {
  const payload = getLoggedInUser();

  if (!payload) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  if (payload.role === 'ADMIN' || payload.role === 'SUPER_ADMIN') {
    setUserIsAdmin(payload);
    next();
    return;
  }

  res.status(401).json({ message: 'Not Authorized' });
}

export function ensureUserIsSponsor(req, res, next) {
  const payload = getLoggedInUser();

  if (!payload) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  if (payload.role !== 'SPONSOR') {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  setUserIsSponsor(payload);
  next();
}

export function ensureUserIsOrganiser(req, res, next) {
  const payload = getLoggedInUser();

  if (!payload) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  if (payload.role !== 'ORGANISER') {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  setUserIsOrganiser(payload);
  next();
}

export function ensureUserIsSuperAdmin(req, res, next) {
  const payload = getLoggedInUser();

  if (!payload) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  if (payload.role !== 'SUPER_ADMIN') {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  setUserIsSuperAdmin(payload);
  next();
}
