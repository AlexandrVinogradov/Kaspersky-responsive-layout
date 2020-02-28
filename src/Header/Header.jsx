import React from 'react'
import style from './LogoAndTitle.module.scss'
import logo from './images/logo.png'

const Header = () => {
  return <div className={style.LogoAndTitle}>
    <img src={logo} alt='Логотип Касперский' />
    <span>PROTEGGI I TUOI DISPOSITIVI ANCHE IN VACANZA!</span>
  </div>
}

export default Header
