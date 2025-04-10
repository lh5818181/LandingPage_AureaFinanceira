import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.css';

const images = [
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%201.png',
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%202.png',
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%203.png',
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%204.png',
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%205.png',
  'https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/Gallery/Notion%206.png',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // troca a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>
        Galeria de Imagens Interativa <br /> Explore Fotos do Notion
      </h2>

      <div className={styles.slider}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className={styles.slide} key={index}>
              <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
