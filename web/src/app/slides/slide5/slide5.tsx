'use client';

import { FormEvent, useTransition, useState, useRef } from 'react';
import styles from '@/app/slides/slides.module.css';
import requestApi from '@/app/slides/slide5/request-api';

export default function Slide5() {
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      console.log(isPending);
      const formData = new FormData(event.currentTarget);
      setSent(await requestApi(formData));
      formRef.current?.reset();
      const timeOutRef = setTimeout(() => {
        setSent(false);
        clearTimeout(timeOutRef);
      }, 5000);
    });
  };

  return (
    <div className={`${styles.slide} ${styles.slide5}`}>
      <div className={styles.formContainer}>
        <div className={styles.text}>Any questions?</div>
        <div className={styles.title}>Let's talk today!</div>
        {sent && (
          <div className={styles.message}>
            The message has been sent successfully!
          </div>
        )}
        <div>
          <form ref={formRef} onSubmit={onSubmit}>
            <div className={styles.formInput}>
              <input
                type='text'
                required
                name='name'
                placeholder='Name'
                disabled={isPending}
              />
            </div>
            <div className={styles.formInput}>
              <input
                type='email'
                required
                name='email'
                placeholder='Email'
                disabled={isPending}
              />
            </div>
            <div className={styles.formInput}>
              <textarea
                name='message'
                required
                placeholder='Message'
                disabled={isPending}
              ></textarea>
            </div>
            <div className={styles.formInput}>
              <button disabled={isPending}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
