import React from "react";
import styles from "./HelpSection.module.css";

export default function HelpSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* картинка */}
        <div className={styles.phoneBlock}>
          <div className={styles.phonePlaceholder}>Фото</div>
        </div>

        {/* текст */}
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>
            Не нашли свою
            <br />
            поломку?
          </h2>

          <p className={styles.description}>
            Наши специалисты бесплатно вас
            <br />
            проконсультируют и ответят на все
            <br />
            вопросы
            {/* <br /> */}
            по телефону{" "}
            <a href="tel:+77057407143" className={styles.phoneLink}>
              +7 771 345 92 59
            </a>{" "}
            <br />
            или
            <a href="tel:+77057407143" className={styles.phoneLink}>
              +7 705 130 53 93
            </a>{" "}
          </p>
        </div>

        {/* правая часть */}
        <div className={styles.buttonBlock}>
          
          {/* 🔥 НОВЫЙ ТЕКСТ */}
          <div className={styles.topText}>
            Закажите бесплатный
            <br />
            выезд мастера{" "}
            <span className={styles.highlight}>за 60 мин.</span>
          </div>

          <p className={styles.smallText}>
            Услуга по выезду специалиста является бесплатной, но
            если Вы откажетесь от ремонта, услуга будет платной.
          </p>

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
}/* // background: #00aeef;
// box-shadow: inset -2px -2px 3px 1px #008dcb, inset 2px 2px 3px 1px #70cff3; */