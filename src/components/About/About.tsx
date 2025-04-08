import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Texto Esquerda */}
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>
            Entenda como o Áurea Financeira pode te ajudar:
          </h2>

          <div className={styles.aboutHighlightBox}>
            Um sistema simples e intuitivo, criado para quem deseja ter{' '}
            <span className={styles.bold}>controle financeiro sem complicações.</span>
          </div>

          <p className={styles.aboutDescription}>
            <em>Sem depender de planilhas complexas ou fórmulas difíceis</em>, ele é um guia com{' '}
            <strong>passos práticos para organizar suas finanças</strong> e alcançar seus objetivos.
          </p>
        </div>

        {/* Lista Direita */}
        <div className={styles.aboutList}>
          <p className={styles.aboutListIntro}>
            Com ele, você aprende a tomar{' '}
            <strong>decisões conscientes, alinhadas aos seus valores e à sua realidade</strong>, conseguindo:
          </p>

          <ul className={styles.aboutItems}>
            {[
              'Identificar para onde seu dinheiro vai e reduzir gastos de forma estratégica.',
              'Estabelecer metas alcançáveis e acompanhar seu progresso.',
              'Planejar suas metas de forma realista, sem abrir mão do que importa para você.',
              'Valorizar seu tempo e consumir de forma mais inteligente.',
            ].map((item, idx) => (
              <li key={idx} className={styles.aboutItem}>
                <span className={styles.aboutItemIndex}>{`${idx + 1}.`}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;