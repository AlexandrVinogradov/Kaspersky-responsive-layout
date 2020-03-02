import React from 'react'
import styleDesc from './SectionProductsDesc.module.scss'
import shieldKIcon from '../images/shieldKIcon.png'
import gearIcon from '../images/gearIcon.png'
import cardIcon from '../images/cardIcon.png'
import parentIcon from '../images/parentIcon.png'
import radarIcon from '../images/radarIcon.png'
import monitorsIcon from '../images/monitorsIcon.png'

const MultiProductDesc = () => {
  return (
    <li className={styleDesc.ProductList__desc_item}>
      <div className={styleDesc.desc__title} id={styleDesc.red}>
        Scopri i vantaggi
      </div>
      <article className={styleDesc.desc__list}>
        <div className={styleDesc.desc__list_iconsBlock}>
          <img
            id={styleDesc.shieldKIcon}
            src={shieldKIcon}
            className={styleDesc.desc__list_icon}
            alt="Protezione dalle"
          />
          <img
            id={styleDesc.cardIcon}
            src={cardIcon}
            className={styleDesc.desc__list_icon}
            alt="Protezione aggiuntiva"
          />
          <img
            id={styleDesc.radarIcon}
            src={radarIcon}
            className={styleDesc.desc__list_icon}
            alt="Controllo vulnerabilità"
          />
          <img
            id={styleDesc.monitorsIcon}
            src={monitorsIcon}
            className={styleDesc.desc__list_icon}
            alt="Un’unica licenza"
          />
          <img
            id={styleDesc.parentIcon}
            src={parentIcon}
            className={styleDesc.desc__list_icon}
            alt="Parental Control"
          />
          <img
            id={styleDesc.gearIcon}
            src={gearIcon}
            className={styleDesc.desc__list_icon}
            alt="Aggiornamenti gratuiti"
          />
        </div>
        <article className={styleDesc.desc__list_articleBlock}>
          <p className={styleDesc.desc__list_desc}>Protezione dalle odierne minacce di sicurezza su Internet</p>
          <p className={styleDesc.desc__list_desc}>Protezione aggiuntiva per shopping e banking online</p>
          <p className={styleDesc.desc__list_desc}>Controllo vulnerabilità delle reti Wi-Fi</p>
          <p className={styleDesc.desc__list_desc}>Un’unica licenza per la gestione della sicurezza dei tuoi dispositivi</p>
          <p className={styleDesc.desc__list_desc}>Parental Control Avanzato</p>
          <p className={styleDesc.desc__list_desc}>Massima sicurezza ed alte prestazioni</p>
        </article>
      </article>
    </li>
  )
}

export default MultiProductDesc
