import React from 'react'
import style from './App.module.scss'
import Header from './Header/Header'
import SectionBaner from './SectionBaner/SectionBaner'
import SectionProducts from './SectionProducts/SectionProducts'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <div className={style.container}>
        <Header />
      </div>
      <main>
        <div className={style.container}>
          <SectionBaner /> 
          <SectionProducts />
        </div>
      </main>

      <footer className={style.footer}>
        <div className={style.container}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
