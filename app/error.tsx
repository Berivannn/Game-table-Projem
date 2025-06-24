'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Hata:', error);
  }, [error]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Bir hata oluştu</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Yeniden Dene</button>
    </div>
  );
}
