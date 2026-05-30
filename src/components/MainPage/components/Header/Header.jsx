import React from 'react'
import HeaderStyle from './Header.module.css'
import '../GlobalStyles/ColorStyles/ColorStyles.css'

// import '../../../MainPage/components/GlobalStyles/ColorStyles'

export default function Header() {
  return (
    <div className={HeaderStyle.HeaderContainer}>
      <header>
        <div className={HeaderStyle.logo}>
          <img className={HeaderStyle.ImgLogo} src="" alt="Логотип" />
          <span className={HeaderStyle.city}>Тараз</span>
          <span className={HeaderStyle.contactsTitle}>Контакты</span>
          <span className={HeaderStyle.phone}>+7 771 345 92 59</span>
          <span className={HeaderStyle.phone}>+7 705 130 53 93</span>
        </div>
      </header>
    </div>
  )
}
