import styles from '@/app/slides/slides.module.css';

export default function Slide3() {
  return (
    <div className={`${styles.slide} ${styles.slide3}`}>
      <div className={styles.release}>
        <div className={styles.releaseContainer}>
          <div className={styles.plus}>&#43;</div>

          <div className={styles.title}>Financial statements</div>

          <div className={styles.phrase}>
            Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
            porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
            purus libero, Morbi purus libero, elementum nec
          </div>
        </div>
      </div>

      <div className={styles.release}>
        <div className={styles.releaseContainer}>
          <div className={styles.plus}>&#43;</div>

          <div className={styles.title}>Press releases</div>

          <div className={styles.phrase}>
            Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
            porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
            purus libero, Morbi purus libero, elementum nec
          </div>
        </div>
      </div>

      <div className={styles.release}>
        <div className={styles.releaseContainer}>
          <div className={styles.plus}>&#43;</div>

          <div className={styles.title}>Webcast links</div>

          <div className={styles.phrase}>
            Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
            porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
            purus libero, Morbi purus libero, elementum nec
          </div>
        </div>
      </div>

      <div className={styles.release}>
        <div className={styles.releaseContainer}>
          <div className={styles.plus}>&#43;</div>

          <div className={styles.title}>Corporate governance</div>

          <div className={styles.phrase}>
            Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam
            porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi
            purus libero, Morbi purus libero, elementum nec
          </div>
        </div>
      </div>
    </div>
  );
}
