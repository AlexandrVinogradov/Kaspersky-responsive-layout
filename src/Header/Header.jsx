import React from 'react'
import style from './Header.module.scss'
import logo from './images/logo.png'

const Header = () => {
  return (
    <div className={style.LogoAndTitle}>
      <a href="/"><img src={logo} alt="Логотип Касперский" /></a>
      <span className={style.tittle}>PROTEGGI I TUOI DISPOSITIVI ANCHE IN VACANZA!</span>
    </div>
  )
}

export default Header
