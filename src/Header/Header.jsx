import React from 'react'
import style from './Header.module.scss'
import logo from './images/logo.png'

const Header = () => {
  return (
    <header className={style.LogoAndTitle}>
      <a href="/"><img src={logo} alt="logo Kaspersky" /></a>
      <span className={style.tittle}>PROTEGGI I TUOI DISPOSITIVI ANCHE IN VACANZA!</span>
    </header>
  )
}

export default Header
