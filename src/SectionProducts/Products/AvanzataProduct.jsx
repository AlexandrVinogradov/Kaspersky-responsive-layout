import React from 'react'
import style from '../SectionProducts.module.scss'
import globusIcon from './images/globusIcon.jpg'
import boxSecurityPink from './images/boxSecurityPink.png'

const AvanzataProduct = () => {
  return (
    <li className={style.Product}>
      <div className={style.Product__title}>
        <img src={globusIcon} alt="Ati-virus" />
        <div className={style.Product__title_name}>
          <span>Kaspersky</span>
          <span className={style.title_uppercase}>Internet security</span>
          <span>2015</span>
        </div>
      </div>
      <div className={style.Product__title_desc}>
        <span>
          Protezione <span className={style.title__desc_pink}>avanzata</span> per i pc
        </span>
      </div>
      <img src={boxSecurityPink} className={style.boxImage} alt="Ati-virus -20%" />
      <ul className={style.buyBlock}>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>1PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>49,95 €</span>
            <span className={style.buy__prise_newPrise}>39,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>3PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>69,95 €</span>
            <span className={style.buy__prise_newPrise}>55,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>5PC</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>89,95 €</span>
            <span className={style.buy__prise_newPrise}>71,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
      </ul>
    </li>
  )
}

export default AvanzataProduct
