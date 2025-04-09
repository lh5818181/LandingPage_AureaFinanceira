import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Texto à esquerda */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Áurea Financeira</h1>

        <h2 className={styles.subtitle}>
          Transforme sua relação com o dinheiro de forma simples e sem sacrifícios.
        </h2>

        <p className={styles.description}>
          Cuidar do dinheiro não precisa ser difícil.
        </p>

        <a href="#" className={styles.button}>
          QUERO ORGANIZAR MEU DINHEIRO
        </a>
      </div>

      {/* Imagem à direita */}
      <div className={styles.mockup}>
        <img
          src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/1-HeaderMockupDispositivosSemFundo.png"
          alt="Mockups da plataforma Áurea Financeira"
          className={styles.image}
        />
      </div>
    </header>
  );
};

export default Header;