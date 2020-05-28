import { createNamespace } from 'cls-hooked';

export const session = createNamespace('request-session');

const LOGGED_IN_USER = 'loggedInUser';
const CURRENT_USER_IS_ADMIN = 'loggedInUserIsAdmin';
const CURRENT_USER_IS_SPONSOR = 'loggedInUserIsSponsor';
const CURRENT_USER_IS_ORGANISER = 'loggedInUserIsOrganiser';
const CURRENT_USER_IS_SUPER_ADMIN = 'loggedInUserIsSuperAdmin';

export function setLoggedInUser(payload) {
  session.set(LOGGED_IN_USER, payload);
}

export function getLoggedInUser() {
  return session.get(LOGGED_IN_USER);
}

export function setUserIsAdmin(payload) {
  session.set(CURRENT_USER_IS_ADMIN, payload);
}

export function getCurrentUserIsAdmin() {
  return session.get(CURRENT_USER_IS_ADMIN);
}

export function setUserIsSponsor(payload) {
  session.set(CURRENT_USER_IS_SPONSOR, payload);
}

export function getCurrentUserIsSponsor() {
  return session.get(CURRENT_USER_IS_SPONSOR);
}

export function setUserIsOrganiser(payload) {
  session.set(CURRENT_USER_IS_ORGANISER, payload);
}

export function getCurrentUserIsOrganiser() {
  return session.get(CURRENT_USER_IS_ORGANISER);
}

export function setUserIsSuperAdmin(payload) {
  session.set(CURRENT_USER_IS_SUPER_ADMIN, payload);
}

export function getCurrentUserIsSuperAdmin() {
  return session.get(CURRENT_USER_IS_SUPER_ADMIN);
}
