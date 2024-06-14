import styles from '@/app/slides/slides.module.css';

export default function Slide4() {
  return (
    <div className={`${styles.slide} ${styles.slide4}`}>
      <div className={`${styles.left} ${styles.block}`}></div>

      <div className={`${styles.right} ${styles.block}`}>
        <div className={styles.title}>
          Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.
        </div>
        <div className={styles.text}>
          <b>
            Proin pharetra lectus non felis vulputate, nec commodo quam mattis.
            Donec fermentum diam eget sem placerat vestibulum. Donec consectetur
            ut leo quis feugiat.
          </b>
        </div>
        <div className={styles.text}>
          Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in
          vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis
          ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel
          auctor. Donec non vestibulum tellus, sit amet condimentum felis.
          Maecenas scelerisque elit a lectus consequat tincidunt.
        </div>
        <div>
          <button>Read about operations</button>
        </div>
      </div>
    </div>
  );
}
