import React from 'react'
import styleDesc from './SectionProductsDesc.module.scss'
import shieldKIcon from '../images/shieldKIcon.png'
import gearIcon from '../images/gearIcon.png'
import cardIcon from '../images/cardIcon.png'
import parentIcon from '../images/parentIcon.png'
import shielSIcon from '../images/shielSIcon.png'

const AvanzataProductDesc = () => {
  return (
    <li className={styleDesc.ProductList__desc_item}>
      <div className={styleDesc.desc__title} id={styleDesc.pink}>
        Scopri i vantaggi
      </div>
      <article className={styleDesc.desc__list}>
        <div className={styleDesc.desc__list_iconsBlock}>
          <img src={shieldKIcon} className={styleDesc.desc__list_icon} alt="Protezione dalle" />
          <img src={cardIcon} className={styleDesc.desc__list_icon} alt="Transazioni online" />
          <img src={parentIcon} className={styleDesc.desc__list_icon} alt="Parental control" />
          <img id={styleDesc.shildSIcon} src={shielSIcon} className={styleDesc.desc__list_icon} alt="Controllo degli" />
          <img id={styleDesc.gearIcon} src={gearIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
        </div>
        <article className={styleDesc.desc__list_articleBlock}>
          <p className={styleDesc.desc__list_desc}>Protezione dalle odierne minacce di sicurezza su Internet</p>
          <p className={styleDesc.desc__list_desc}>Transazioni online sicure</p>
          <p className={styleDesc.desc__list_desc}>Parental control che garantisce la sicurezza della tua famiglia</p>
          <p className={styleDesc.desc__list_desc}>
            Controllo degli accessi alla tua Webcam da parte di PC non autorizzati
          </p>
          <p className={styleDesc.desc__list_desc}>Aggiornamenti gratuiti</p>
        </article>
      </article>
    </li>
  )
}

export default AvanzataProductDesc
