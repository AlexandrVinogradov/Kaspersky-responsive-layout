import React from 'react'
import style from '../SectionProducts.module.scss'
import shieldIcon from './images/shieldIcon.jpg'
import boxAntiVirus from './images/boxAntiVirus.png'

const EssenzialeProduct = () => {
  return (
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
        <span>
          Protezione <span className={style.title__desc_green}>essenziale</span> per i pc
        </span>
      </div>
      <img src={boxAntiVirus} className={style.boxImage} alt="Ati-virus -20%" />
      <ul className={style.buyBlock}>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>1PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>29,95 €</span>
            <span className={style.buy__prise_newPrise}>23,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>3PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>44,95 €</span>
            <span className={style.buy__prise_newPrise}>35,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>5PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>64,95 €</span>
            <span className={style.buy__prise_newPrise}>51,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
      </ul>
    </li>
  )
}

export default EssenzialeProduct
