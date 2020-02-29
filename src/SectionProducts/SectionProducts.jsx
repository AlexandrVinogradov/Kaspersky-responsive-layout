import React from 'react'
import styleProd from './SectionProducts.module.scss'
import styleDesc from './SectionProductsDesc.module.scss'
import EssenzialeProduct from './Products/EssenzialeProduct'
import AvanzataProduct from './Products/AvanzataProduct'
import MultiProduct from './Products/MultiProduct'

import shieldKIcon from './images/shieldKIcon.png'
import desktopIcon from './images/desktopIcon.png'
import gearIcon from './images/gearIcon.png'
import cardIcon from './images/cardIcon.png'
import parentIcon from './images/parentIcon.png'
import shielSIcon from './images/shielSIcon.png'
import radarIcon from './images/radarIcon.png'
import monitorsIcon from './images/monitorsIcon.png'

const SectionProducts = () => {
  return (
    <section>
      <ul className={styleProd.ProductList}>
        <EssenzialeProduct />
        <AvanzataProduct />
        <MultiProduct />
      </ul>

      <ul className={styleDesc.ProductList__desc}>
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


        <li className={styleDesc.ProductList__desc_item}>
          <div className={styleDesc.desc__title} id={styleDesc.pink}>Scopri i vantaggi</div>
          <article className={styleDesc.desc__list}>
            <div className={styleDesc.desc__list_iconsBlock}>
              <img src={shieldKIcon} className={styleDesc.desc__list_icon} alt="Protezione dalle" />
              <img src={cardIcon} className={styleDesc.desc__list_icon} alt="Scansione continua" />
              <img src={parentIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
              <img id={styleDesc.shildSIcon} src={shielSIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
              <img id={styleDesc.gearIcon} src={gearIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
            </div>
            <article className={styleDesc.desc__list_articleBlock}>
              <p className={styleDesc.desc__list_desc}>Protezione dalle odierne minacce di sicurezza su Internet</p>
              <p className={styleDesc.desc__list_desc}>Transazioni online sicure</p>
              <p className={styleDesc.desc__list_desc}>Parental control che garantisce la sicurezza della tua famiglia</p>
              <p className={styleDesc.desc__list_desc}>Controllo degli accessi alla tua Webcam da parte di PC non autorizzati</p>
              <p className={styleDesc.desc__list_desc}>Aggiornamenti gratuiti</p>
            </article>
          </article>
        </li>

        <li className={styleDesc.ProductList__desc_item}>
          <div className={styleDesc.desc__title} id={styleDesc.red}>Scopri i vantaggi</div>
          <article className={styleDesc.desc__list}>
            <div className={styleDesc.desc__list_iconsBlock}>
              <img id={styleDesc.shieldKIcon} src={shieldKIcon} className={styleDesc.desc__list_icon} alt="Protezione dalle" />
              <img src={cardIcon} className={styleDesc.desc__list_icon} alt="Scansione continua" />
              <img src={radarIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
              <img src={monitorsIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
              <img src={parentIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
              <img  id={styleDesc.gearIcon} src={gearIcon} className={styleDesc.desc__list_icon} alt="Aggiornamenti gratuiti" />
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
      </ul>
    </section>
  )
}

export default SectionProducts
