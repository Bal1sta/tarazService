import React from "react";
import styles from "./WashingProblems.module.css";
import problems from "./data/problemsData";
import ProblemCard from "./components/ProblemCard/ProblemCard";

export default function WashingProblems() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Популярные поломки стиральных машин</h2>

        <div className={styles.grid}>
          {problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              title={problem.title}
              image={problem.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}