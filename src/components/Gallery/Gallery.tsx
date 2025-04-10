import React from 'react';
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
  const duplicatedImages = [...images, ...images]; // duplica para loop contínuo

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>
        Galeria de Imagens Interativa <br /> Explore Fotos do Notion
      </h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {duplicatedImages.map((src, index) => (
            <div className={styles.gridItem} key={index}>
              <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
