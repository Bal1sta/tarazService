import React from "react";
import styles from "./ProblemCard.module.css";

export default function ProblemCard({ title, image }) {
  return (
    <article className={styles.card}>
      <button className={styles.closeButton} type="button" aria-label="Закрыть">
        ×
      </button>

      <div className={styles.imageBox}>
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}