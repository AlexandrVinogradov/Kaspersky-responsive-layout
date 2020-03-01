import React from 'react'
import style from '../SectionProducts.module.scss'
import scanerIcon from './images/scanerIcon.jpg'
import boxSecurityRed from './images/boxSecurityRed.png'

const MultiProduct = () => {
  return (
    <li className={style.Product} id={style.lastProduct}>
      <div className={style.Product__title}>
        <img src={scanerIcon} alt="Ati-virus" />
        <div className={style.Product__title_name}>
          <span>Kaspersky</span>
          <span className={style.title_uppercase}>Internet security</span>
          <span>Multi-Device</span>
        </div>
      </div>
      <div id={style.Product__title_pad} className={style.Product__title_desc}>
        <span>
          Protezione <span className={style.title__desc_red}>multii-dispositivo</span> per i pc, mac, cmartphone e tablet android
        </span>
      </div>
      <img src={boxSecurityRed} className={style.boxImage} alt="Ati-virus -20%" />
      <ul className={style.buyBlock}>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>3 Disp.</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>69,95 €</span>
            <span className={style.buy__prise_newPrise}>55,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>5 Disp.</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>89,95 €</span>
            <span className={style.buy__prise_newPrise}>71,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
        <li className={style.Product__buy}>
          <span className={style.buy__size}>10 Disp.</span>
          <div className={style.buy__prise}>
            <span className={style.buy__prise_oldPrise}>129,95 €</span>
            <span className={style.buy__prise_newPrise}>103,95 €</span>
          </div>
          <button className={style.buy__btn} type="button" />
        </li>
      </ul>
    </li>
  )
}

export default MultiProduct
