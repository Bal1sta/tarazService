import React from "react";
import styles from "./RepairStepsSection.module.css";
import stepsData from "./stepsData";

function StepCard({ step, index }) {
  const isTopRow = index < 3;
  const isBottomRow = index >= 3;
  const isNotLastInTopRow = index < 2;
  const isNotLastInBottomRow = index >= 3 && index < 5;

  return (
    <div
      className={`${styles.cardWrapper} ${isTopRow ? styles.topRow : ""} ${
        isBottomRow ? styles.bottomRow : ""
      }`}
    >
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <span className={styles.stepNumber}>{step.id}</span>

          {step.image ? (
            <img src={step.image} alt={step.title} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder}></div>
          )}
        </div>

        <h3 className={styles.cardTitle}>{step.title}</h3>
        <p className={styles.cardDescription}>{step.description}</p>
      </div>

      {isNotLastInTopRow && <div className={styles.horizontalDotsTop}></div>}
      {isNotLastInBottomRow && (
        <div className={styles.horizontalDotsBottom}></div>
      )}
    </div>
  );
}

export default function RepairStepsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Этапы ремонта и ценообразование</h2>

        <div className={styles.grid}>
          {stepsData.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}

          <div className={styles.middleConnector}></div>
          <div className={styles.rightVerticalConnector}></div>
          <div className={styles.leftVerticalConnector}></div>
        </div>

        <div className={styles.buttonWrapper}>
          <a
            href="https://wa.me/77057407143"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappButton}
          >
            Перейти в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}