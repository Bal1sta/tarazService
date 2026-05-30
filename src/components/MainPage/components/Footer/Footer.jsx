import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ЛЕВАЯ КОЛОНКА — SERVICE */}
        <div className={styles.left}>
          <h3 className={styles.logo}>SERVICE</h3>

          <p className={styles.description}>
            Мы занимаемся ремонтом и обслуживанием техники любой сложности.
            Быстро, качественно и с гарантией результата.
          </p>

          <p className={styles.extra}>
            ✔ Бесплатная диагностика <br />
            ✔ Гарантия на работу <br />
            ✔ Работаем ежедневно
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА — КОНТАКТЫ */}
        <div className={styles.right}>
          <p className={styles.title}>Контакты</p>

          <p className={styles.text}>
            📍 Тараз, Акмолда батыра басы 58
          </p>

          <a href="tel:+77713459259" className={styles.phone}>
            📞 +7 771 345 92 59
          </a>

          <a href="tel:+77051305393" className={styles.phone}>
            📞 +7 705 130 53 93
          </a>

          <a href="tel:+77713459259" className={styles.callBtn}>
            Позвонить сейчас
          </a>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} SERVICE. Все права защищены.</p>
      </div>
    </footer>
  );
}