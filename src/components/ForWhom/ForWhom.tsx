import styles from './ForWhom.module.css';

const mockup = (
  <img
    src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/4-MockupSelecaoDouradaSemFundo.png"
    alt="Mockup de seleção dourado"
    className={styles['forwhom-mockup']}
  />
);

const ForWhom = () => {
  return (
    <section className={styles.forwhom}>
      <div className={styles['forwhom-content']}>
        <div className={styles['forwhom-left']}>
          <div className={styles['forwhom-text-block']}>
            <h2 className={styles['forwhom-title']}>Para quem é o Áurea Financeira:</h2>
            <ul className={styles['forwhom-list']}>
              <li>
                <span>{mockup}</span> Sente que o dinheiro entra e sai, mas nunca sobra nada.
              </li>
              <li>
                <span>{mockup}</span> Quer sair das dívidas sem viver um eterno sacrifício.
              </li>
              <li>
                <span>{mockup}</span> Quer entender como seus comportamentos e emoções impactam suas decisões financeiras.
              </li>
              <li>
                <span>{mockup}</span> Busca um método que respeite seu estilo de vida, sem fórmulas rígidas.
              </li>
              <li>
                <span>{mockup}</span> Acredita que dinheiro é ferramenta para uma vida com mais significado e realização.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['forwhom-right']}>
          <img
            src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/MockupForWhomOriginal.png"
            alt="Imagem decorativa com frase circular"
            className={styles['forwhom-image']}
          />
        </div>
      </div>
    </section>
  );
};

export default ForWhom;