import React from 'react';
import styles from './ranek.module.css'
import Header from './components/Header';
import imgContato from './img/contato.jpg'
const Contato = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerProduto} >
        <img className={styles.produtoSrc} src={imgContato} alt="" />
        <div className={styles.produtoInfo}>
          <h2>Entre em contato.</h2>
          <p> - pedrosviki1265@gmail.com</p>
          <p> - (14) 98817-0670</p>    
        </div>
      </div>
    </div>
  );
}

export default Contato;
