import React from 'react'
import style from './Footer.module.scss'
import facebook from './icons/facebook.png'
import googlePlus from './icons/googlePlus.png'
import twitter from './icons/twitter.png'
import youtybe from './icons/youtybe.png'
import linkedin from './icons/linkedin.png'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__copyright}>
        <span id={style.font_md}>© 1997 - 2015 Kaspersky Lab</span>
        <span>Produttore leader di Software Antivirus.</span>
        <span>Kaspersky Lab Italia - P.IVA 09923201009</span>
      </div>
      <div className={style.footer__privacy}>
        <span id={style.privacy}>Privacy | <span id={style.Legali}>Informazioni Legali</span> | Contatti</span>
      </div>
      <div className={style.footer__logos}>
        <a href='https://www.facebook.com/KasperskyLabRussia/?brand_redir=127187187348820'><img src={facebook} alt='facebook link' /></a>
        <a href='/'><img src={googlePlus} alt='googlePlus link' /></a>
        <a href='https://twitter.com/Kaspersky_ru?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src={twitter} alt='twitter link' /></a>
        <a href='https://www.youtube.com/channel/UCiFPvAzHdUXchHHKb8YDb3Q'><img src={youtybe} alt='youtybe link' /></a>
        <a href='https://www.linkedin.com/company/kaspersky'><img src={linkedin} alt='linkedin link' /></a>
      </div>
    </div>
  )
}

export default Footer
