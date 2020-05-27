import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { getUserByEmail, getRoleID, saveUser } from './user';
import { SignupSchema, LoginSchema } from '../validation/auth';

export async function signUp(data) {
  const { email, password, ...rest } = await SignupSchema.validateAsync(data, {
    abortEarly: false,
    stripUnknown: true
  });

  const userExists = await getUserByEmail(email);

  if (userExists) {
    throw new Error('User already exists, please sign in.');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await saveUser({ email, ...rest, password: passwordHash });

  const token = await getUserToken(user, 'TRAINEE', user.id);

  return token;
}

export async function login(data) {
  const { email, password } = await LoginSchema.validateAsync(data, {
    abortEarly: false,
    stripUnknown: true
  });

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error('invalid email/password');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error('invalid email/password');
  }

  const roleId = await getRoleID(user);

  const token = await getUserToken(user, user.role, roleId);

  return token;
}

async function getUserToken(user, role, roleId) {
  return jwt.sign({ id: user.id, role, roleId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d'
  });
}
