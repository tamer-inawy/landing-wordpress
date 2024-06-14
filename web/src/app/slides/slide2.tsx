'use client';

import { useState } from 'react';
import styles from '@/app/slides/slides.module.css';

export default function Slide2() {
  const [isStopped, setIsStopped] = useState(true);

  const playVideo = () => {
    console.log(isStopped);
    setIsStopped(!isStopped);
  };

  return (
    <div className={`${styles.slide} ${styles.slide2}`}>
      <div className={styles.about}>
        <div className={styles.logo}>
          <svg
            width='66'
            height='66'
            viewBox='0 0 66 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='33' cy='33' r='33' fill='#8B2351' />
            <path
              d='M41.1946 23.5L45.3663 30.4818L33 42.3082L20.6498 30.4972L25.3533 23.5H33.2826H41.1946Z'
              stroke='white'
            />
          </svg>
        </div>

        <div className={styles.text}>
          <div className={styles.title}>
              Aenean vulputate quis est et pulvinar.
          </div>
          <div className={styles.desc}>
            Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec
            ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam.
            Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus
            mollis aliquam. Sed facilisis nec ipsum nec
          </div>
        </div>

        <div className={styles.button}>
          <button>About us</button>
        </div>
      </div>

      <div className={styles.show}>
        <div className={`${styles.videobox} ${styles.stopped}`}>
          {isStopped ? (
            <div className={styles.playButton} onClick={playVideo}>
              <div className={styles.rectangle}>
                <svg
                  fill='#8B2351'
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 210 210'
                  xmlSpace='preserve'
                  stroke='#8B2351'
                  strokeWidth='0.0021000000000000003'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    stroke='#CCCCCC'
                    strokeWidth='0.42000000000000004'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path d='M179.07,105L30.93,210V0L179.07,105z'></path>{' '}
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.videoPlayer}>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/LXb3EKWsInQ?si=xllGWoKYx9-jLWm6&autoplay=1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
