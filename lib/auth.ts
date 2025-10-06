export interface User {
  id: string;
  email: string;
  name: string;
  role: 'franchise' | 'admin';
}

export function getSession(): User | null {
  if (typeof window === 'undefined') return null;

  const session = localStorage.getItem('user_session');
  if (!session) return null;

  try {
    return JSON.parse(session);
  } catch {
    return null;
  }
}

export function setSession(user: User) {
  localStorage.setItem('user_session', JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem('user_session');
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}
