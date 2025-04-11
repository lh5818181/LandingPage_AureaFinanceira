import React from 'react';
import styles from './Footer.module.css';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.brand}><strong>Casal em Conta</strong> • 2025</p>
            <p className={styles.rights}>Todos os direitos reservados</p>
          </div>
          <div className={styles.right}>
            <p className={styles.question}>Tem dúvida?</p>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
