import React from 'react'
import style from './SectionProducts.module.scss'
import shieldIcon from './images/shieldIcon.jpg'
import globusIcon from './images/globusIcon.jpg'
import scanerIcon from './images/scanerIcon.jpg'

import boxAntiVirus from './images/boxAntiVirus.png'
import boxSecurityPink from './images/boxSecurityPink.png'
import boxSecurityRed from './images/boxSecurityRed.png'

const SectionProducts = () => {
  return (
    <ul className={style.ProductList}>
      <li className={style.Product}>
        <div className={style.Product__title}>
          <img src={shieldIcon} alt="Ati-virus" />
          <div className={style.Product__title_name}>
            <span>Kaspersky</span>
            <span className={style.title_uppercase}>Anti-virus</span>
            <span>2015</span>
          </div>
        </div>
        <div className={style.Product__title_desc}>
          <span >Protezione <span className={style.title__desc_green}>essenziale</span> per i pc</span>
        </div>
        <img src={boxAntiVirus} className={style.boxImage} alt="Ati-virus -20%" />
        <ul className={style.buyBlock}>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>1PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>29,95 €</span>
              <span className={style.buy__prise_newPrise}>23,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>3PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>44,95 €</span>
              <span className={style.buy__prise_newPrise}>35,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>5PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>64,95 €</span>
              <span className={style.buy__prise_newPrise}>51,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
        </ul>
      </li>
      <li>

        <div className={style.Product__title}>
          <img src={globusIcon} alt="Ati-virus" />
          <div className={style.Product__title_name}>
            <span>Kaspersky</span>
            <span className={style.title_uppercase}>Internet security</span>
            <span>2015</span>
          </div>
        </div>
        <div className={style.Product__title_desc}>
          <span >Protezione <span className={style.title__desc_pink}>essenziale</span> per i pc</span>
        </div>
        <img src={boxSecurityPink} className={style.boxImage} alt="Ati-virus -20%" />
        <ul className={style.buyBlock}>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>1PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>49,95 €</span>
              <span className={style.buy__prise_newPrise}>39,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>3PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>69,95 €</span>
              <span className={style.buy__prise_newPrise}>55,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>5PC</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>89,95 €</span>
              <span className={style.buy__prise_newPrise}>71,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
        </ul>
      </li>
      <li>

        <div className={style.Product__title}>
          <img src={scanerIcon} alt="Ati-virus" />
          <div className={style.Product__title_name}>
            <span>Kaspersky</span>
            <span className={style.title_uppercase}>Internet security</span>
            <span>2015</span>
          </div>
        </div>
        <div className={style.Product__title_desc}>
          <span >Protezione <span className={style.title__desc_red}>multii-dispositivo</span> per i pc,</span>
        </div>
        <img src={boxSecurityRed} className={style.boxImage} alt="Ati-virus -20%" />
        <ul className={style.buyBlock}>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>3 Disp.</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>69,95 €</span>
              <span className={style.buy__prise_newPrise}>55,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>5 Disp.</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>89,95 €</span>
              <span className={style.buy__prise_newPrise}>71,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
          <li className={style.Product__buy}>
            <span className={style.buy__size}>10 Disp.</span>
            <div className={style.buy__prise}>
              <span className={style.buy__prise_oldPrise}>129,95 €</span>
              <span className={style.buy__prise_newPrise}>103,95 €</span>
            </div>
            <button className={style.buy__btn}></button>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default SectionProducts
