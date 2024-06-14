import Image from 'next/image';
import styles from '@/app/page.module.css';
import Slide1 from '@/app/slides/slide1';
import Slide2 from '@/app/slides/slide2';
import Slide3 from '@/app/slides/slide3';
import Slide4 from '@/app/slides/slide4';
import Slide5 from '@/app/slides/slide5/slide5';

export default function Home() {
  return (
    <main className={styles.main}>
      <Slide1></Slide1>

      <Slide2></Slide2>

      <Slide3></Slide3>

      <Slide4></Slide4>

      <Slide5></Slide5>
    </main>
  );
}
