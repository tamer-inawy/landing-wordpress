'use client';
 
import { useEffect } from 'react';
import styles from '@/app/error.module.css';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    // console.error(error);
  }, [error]);
 
  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Something went wrong!</h2>
      <h3 className={styles.message}>{error.message}</h3>
      <button
        className={styles.button}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
