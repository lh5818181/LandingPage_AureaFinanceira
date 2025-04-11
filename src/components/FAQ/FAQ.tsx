import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Por quanto tempo terei acesso ao Áurea Financeira?',
    answer:
      'O acesso ao Notion é vitalício! Uma vez adquirido, ele será seu para sempre. Você também poderá assistir as aulas explicativas durante o período de 12 meses.',
  },
  {
    question: 'Ele funciona para quem nunca fez planejamento financeiro?',
    answer:
      'Sim! O Áurea Financeira foi criado para ser intuitivo e acessível, independente do seu nível de conhecimento.',
  },
  {
    question: 'Preciso usar planilhas ou algum software complicado?',
    answer:
      'Não! Ele foi pensado para ser simples e direto, sem necessidade de planilhas complexas.',
  },
  {
    question: 'E se eu tiver dúvidas sobre como usar?',
    answer:
      'O material foi estruturado para ser bem explicativo, mas caso tenha alguma dúvida, pode entrar em contato pelo nosso suporte.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Dúvidas Frequentes</h2>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <button className={styles.question} onClick={() => toggleIndex(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div
              className={`${styles.answerWrapper} ${
                activeIndex === index ? styles.active : ''
              }`}
            >
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
