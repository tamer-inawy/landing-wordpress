import styles from '@/app/slides/slides.module.css';

export default function Slide1() {
  return (
    <div className={`${styles.slide} ${styles.slide1}`}>
      <div className={styles.preHeader}></div>
      <div className={`${styles.header} ${styles.mainHeader}`}>
        Lorem ipsum dolor sit amet, consec
      </div>
      <div className={`${styles.header} ${styles.subHeader}`}>
        Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in
        ligula consequat malesuada. Praesent posuere vestibulum neque ac
        posuere. 
      </div>
    </div>
  );
}
