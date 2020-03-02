import React from 'react'
import styleProd from './SectionProducts.module.scss'
import styleDesc from './ProductsDesc/SectionProductsDesc.module.scss'
import EssenzialeProduct from './Products/EssenzialeProduct'
import AvanzataProduct from './Products/AvanzataProduct'
import MultiProduct from './Products/MultiProduct'
import EssenzialeProductDesc from './ProductsDesc/EssenzialeProductDesc'
import AvanzataProductDesc from './ProductsDesc/AvanzataProducDesc'
import MultiProductDesc from './ProductsDesc/MultiProductDesc'

const SectionProducts = () => {
  return (
    <section>
      <ul className={styleProd.ProductList}>
        <EssenzialeProduct />
        <AvanzataProduct />
        <MultiProduct />
      </ul>
      
      <ul className={styleDesc.ProductList__desc}>
        <EssenzialeProductDesc />
        <AvanzataProductDesc />
        <MultiProductDesc />
      </ul>
    </section>
  )
}

export default SectionProducts
