import React from 'react';
import styles from './Mentors.module.css';

const Mentors = () => {
  return (
    <section className={styles.mentorsSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={styles.label}>Seus mentores</span>
          <h2 className={styles.names}>Ari Lessia e José Heleno</h2>
          <p className={styles.paragraph}>
            Somos , um casal que transformou a nossa vida financeira após anos de desorganização e dívidas. 
            Pais de duas lindas meninas, superamos diversos obstáculos com resiliência e fé em Deus.
            Com planejamento financeiro e disciplina, desenvolvemos soluções tangíveis e acessíveis, 
            aplicáveis a qualquer pessoa, por meio de um método validado e eficaz.
          </p>
          <p className={styles.paragraph}>
            Utilizamos nossa experiência para ajudar casais, jovens e qualquer pessoa a conquistar o controle 
            financeiro que transforma vidas.
          </p>
          <p className={styles.paragraph}>
            <strong>
              Sabemos bem como o descontrole financeiro afeta o emocional e as relações familiares, 
              pois, já passamos por isso várias vezes...
            </strong>
          </p>
          <p className={styles.paragraph}>
            <em>
              Como mentores, estamos aqui para guiar você nessa jornada. <br></br>
              <strong>Nosso objetivo</strong> é compartilhar estratégias práticas para ajudá-lo(a) a sair do sufoco, 
              organizar suas finanças e construir um futuro mais seguro e próspero.
            </em>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/Casal.jpg"
            alt="Ari Lessia e José Heleno"
            className={styles.mentorImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Mentors;
