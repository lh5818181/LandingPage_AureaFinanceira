// components/WhatYouFind.tsx
import React from 'react';
import styles from './WhatYouFind.module.css';

const WhatYouFind = () => {
  return (
    <section className={styles.whatYouFind}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          O que você encontra dentro do Áurea Financeira?
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/1-IconFormWhatYouFindSemFundo.png" alt="Ícone de tarefas" className={styles.icon} />
            <h3 className={styles.cardTitle}>Tarefas Financeiras</h3>
            <p className={styles.cardText}>
              Checklist de ações práticas para ajustar suas finanças no dia a dia.
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/2-IconAlvoWhatYouFindSemFundo.png" alt="Ícone de metas" className={styles.icon} />
            <h3 className={styles.cardTitle}>Metas Financeiras</h3>
            <p className={styles.cardText}>
              Definição e acompanhamento de curto, médio e longo prazo.
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://raw.githubusercontent.com/lh5818181/servidor-estatico-aureaFinanceira/refs/heads/main/ICONES/3-IconTelaWhatYouFindSemFundo.png" alt="Ícone de dashboard" className={styles.icon} />
            <h3 className={styles.cardTitle}>Dashboard Financeiro</h3>
            <p className={styles.cardText}>
              Controle simples e intuitivo de receitas, despesas essenciais, despesas e metas
              financeiras, mês a mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouFind;
