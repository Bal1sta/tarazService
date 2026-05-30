import React from 'react'
import HeroSectionStyle from './HeroSectionStyle.module.css'

export default function HeroSection() {
  return (
    <section className={HeroSectionStyle.HeroSectionContainer}>

      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className={HeroSectionStyle.LeftSide}>

        <h1 className={HeroSectionStyle.HeadingTitle}>
          РЕМОНТ СТИРАЛЬНЫХ <br />
          МАШИН <span>ТАРАЗ</span>
        </h1>

        <p className={HeroSectionStyle.SubTitle}>
          Позвоните и мастер бесплатно <br />
          приедет через 60 мин.
        </p>

        <ul className={HeroSectionStyle.AreaMain}>
          <li className={HeroSectionStyle.ListItem1}>Диагностика<br />бесплатная</li>
          <li className={HeroSectionStyle.ListItem2}>Выезд мастера<br />бесплатный</li>
          <li className={HeroSectionStyle.ListItem3}>Гарантия<br />от 3х месяцев</li>
          <li className={HeroSectionStyle.ListItem4}>Любой ремонт<br />за 1-3 дня</li>
          <li className={HeroSectionStyle.ListItem5}>Опыт мастеров<br />больше 10 лет</li>
          <li className={HeroSectionStyle.ListItem6}>Персональный<br />менеджер</li>
        </ul>

        <button className={HeroSectionStyle.WhatsappButton}>
          Перейти в WhatsApp
        </button>

      </div>


      {/* ПРАВАЯ ЧАСТЬ */}
      <div className={HeroSectionStyle.RightSide}>

        <div className={HeroSectionStyle.MasterCard}>
          <div>
            <strong>КОНСТАНТИН</strong>
            <span className={HeroSectionStyle.Rating}>⭐ 5</span>
          </div>

          <p>Старший мастер по ремонту стиральных машин</p>

          <p className={HeroSectionStyle.Experience}>
            <span>ОПЫТ РАБОТЫ:</span> 15 лет
          </p>
        </div>

        <div className={HeroSectionStyle.MainPhoto}></div>

      </div>

    </section>
  )
}