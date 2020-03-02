import React from 'react'
import styleDesc from './SectionProductsDesc.module.scss'
import shieldKIcon from '../images/shieldKIcon.png'
import desktopIcon from '../images/desktopIcon.png'
import gearIcon from '../images/gearIcon.png'

const EssenzialeProductDesc = () => {
  return (
    <li className={styleDesc.ProductList__desc_item}>
      <div className={styleDesc.desc__title}>Scopri i vantaggi</div>
      <article className={styleDesc.desc__list}>
        <div className={styleDesc.desc__list_iconsBlock}>
          <img src={shieldKIcon} className={styleDesc.desc__list_icon} alt="Protezione dalle" />
          <img src={desktopIcon} className={styleDesc.desc__list_icon} alt="Scansione continua" />
          <img id={styleDesc.gearIcon} src={gearIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
        </div>
        <article className={styleDesc.desc__list_articleBlock}>
          <p className={styleDesc.desc__list_desc}>Protezione dalle odierne minacce di sicurezza su Internet</p>
          <p className={styleDesc.desc__list_desc}>Scansione continua del tuo PC con avvisi real time</p>
          <p className={styleDesc.desc__list_desc}>Aggiornamenti gratuiti</p>
        </article>
      </article>
    </li>
  )
}

export default EssenzialeProductDesc
