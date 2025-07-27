// utils/auth.js
export const isAuthenticated = () => {
  return !!localStorage.getItem('user'); // or token, session, etc.
};
