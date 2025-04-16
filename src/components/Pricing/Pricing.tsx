import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingBox}>
        <p className={styles.description}>Tudo isso por apenas 12x de</p>
        <h2 className={styles.price}>R$ 9,74</h2>
        <p className={styles.pix}>ou R$ 297 à vista no Pix.</p>
      </div>
      <p className={styles.ctaText}>Acesse agora e transforme suas finanças com leveza!</p>
      <a href="#seu-link-de-compra" className={styles.button}>QUERO O MEU NOTION</a>

      <div className={styles.garantiaBox}>
        <img
          className={styles.garantiaImage}
          src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/IconGarantiaPricingSemFundo.png"
          alt="7 dias de garantia"
        />
        <div className={styles.garantiaText}>
          <h3 className={styles.garantiaTitle}>Garantia 100% sem risco</h3>
          <p className={styles.garantiaParagraph}>
            Nosso compromisso é que o Áurea Financeira realmente faça a diferença na sua vida.
            <br /><br />
            Experimente por 7 dias e, se sentir que não é para você, basta nos mandar um e-mail e devolveremos 100% do seu investimento.
            <br /><br />
            Sem burocracia, sem letras miúdas. Porque acreditamos que uma boa relação com a cliente começa com confiança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
