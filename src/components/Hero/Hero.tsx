import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.heroText}>
          <strong className={styles.heroStrong}>O Notion Áurea Financeira</strong> é um sistema <span className={styles.Fbold}>prático e intuitivo</span> que ajuda a <span className={styles.Fbold}>organizar finanças, definir metas</span> e <span className={styles.Fbold}>tomar decisões</span> com clareza e segurança.
        </p>

        <p className={styles.heroSubText}>
          Baseado em <span className={styles.Fbold}>economia comportamental</span>, oferece um método realista para <span className={styles.Fbold}>transformar sua relação com o dinheiro</span>, <span className={styles.heroItalic}>sem promessas mágicas ou radicalismo.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;