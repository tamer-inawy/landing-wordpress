import { useFormStatus } from 'react-dom';
import styles from '@/app/slides/slides.module.css';

export default function ContactForm() {
  const { pending } = useFormStatus();

  return (
    <div>
      <div className={styles.formInput}>
        <input type='text' required name='name' placeholder='Name' disabled={pending} />
      </div>
      <div className={styles.formInput}>
        <input type='email' required name='email' placeholder='Email' disabled={pending} />
      </div>
      <div className={styles.formInput}>
        <textarea name='message' required placeholder='Message' disabled={pending}></textarea>
      </div>
      <div className={styles.formInput}>
        <button disabled={pending}>Submit</button>
      </div>
    </div>
  );
}
