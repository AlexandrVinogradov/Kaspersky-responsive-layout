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
        <span>© 1997 - 2015 Kaspersky Lab</span>
        <span>Produttore leader di Software Antivirus.</span>
        <span>Kaspersky Lab Italia - P.IVA 09923201009</span>
      </div>
      <div className={style.footer__privacy}>
        <span>Privacy | Informazioni Legali | Contatti</span>
      </div>
      <div className={style.footer__logos}>
        <img src={facebook} />
        <img src={googlePlus} />
        <img src={twitter} />
        <img src={youtybe} />
        <img src={linkedin} />
      </div>
    </div>
  )
}

export default Footer
