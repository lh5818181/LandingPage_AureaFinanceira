import React, { useState, useRef, useEffect } from 'react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Velocidade do movimento (ajuste conforme necessário)

    let animationFrameId: number;

    const animate = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia o scroll para criar o loop infinito
      }
      slider.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.sliderWrapper} ref={sliderRef}>
        <div className={styles.sliderTrack}>
          {images.map((src, index) => (
            <div
              className={styles.gridItem}
              key={index}
              onClick={() => handleImageClick(src)}
            >
              <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
          {images.map((src, index) => (
            <div
              className={styles.gridItem}
              key={`clone-${index}`}
              onClick={() => handleImageClick(src)}
            >
              <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Imagem ampliada" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;