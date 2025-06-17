'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      {session ? (
        <>
          <span>Welcome, {session.user?.name || session.user?.email}</span>
          <button onClick={() => signOut()} style={{ marginLeft: '1rem' }}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => signIn('google')}>Login with Google</button>
          <button onClick={() => signIn('github')} style={{ marginLeft: '1rem' }}>Login with GitHub</button>
        </>
      )}
    </nav>
  );
}
