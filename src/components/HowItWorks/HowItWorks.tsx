import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '1',
    title: 'Baixe e comece imediatamente:',
    text: 'Acesse o Áurea Financeira assim que finalizar a compra e tenha acesso instantâneo à ferramenta.',
  },
  {
    number: '2',
    title: 'Personalize para sua realidade:',
    text: 'Preencha suas informações e defina suas metas financeiras de forma intuitiva. Comece a controlar seu dinheiro de forma simples e eficaz.',
  },
  {
    number: '3',
    title: 'Defina suas prioridades:',
    text: 'Use a Bússola Comportamental para entender como seu tempo e dinheiro estão conectados e identifique o que deve fazer ajustes para conquistar seus objetivos.',
  },
  {
    number: '4',
    title: 'Personalize para sua realidade:',
    text: 'Preencha suas informações e defina suas metas financeiras de forma intuitiva. Comece a controlar seu dinheiro de forma simples e eficaz.',
  },
  {
    number: '5',
    title: 'Tome decisões mais estratégicas:',
    text: 'Com a Inteligência do Consumo, analise o impacto dos seus gastos e aprenda a priorizar o que realmente importa.',
  },
  {
    number: '6',
    title: 'Transforme desejos em conquistas:',
    text: 'Registre seus sonhos na lista de Desejos, entenda como torná-los realidade e acompanhe sua evolução.',
  },
];

const HowItWork = () => {
  return (
    <section className={styles.howItWorkSection}>
      <h2 className={styles.title}>Como funciona na prática?</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <span className={styles.number}>{step.number}</span>
            <div className={styles.textContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
