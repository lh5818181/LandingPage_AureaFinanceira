import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.heroText}>
          <strong className={styles.heroStrong}>O Notion Áurea Financeira</strong> é um sistema <strong>prático e intuitivo</strong> que ajuda a <strong>organizar finanças, definir metas</strong> e <strong>tomar decisões</strong> com clareza e segurança.
        </p>

        <p className={styles.heroSubText}>
          Baseado em <strong>economia comportamental</strong>, oferece um método realista para <span className={styles.heroItalic}>transformar sua relação com o dinheiro</span>, <span className={styles.heroItalic}>sem promessas mágicas ou radicalismo.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;