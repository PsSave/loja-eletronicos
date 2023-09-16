import React from 'react';
import styles from './ranek.module.css'
const Ranek = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Ranek</h1>
        <button>Produtos</button>
        <button>Contato</button>
      </div>
    </div>
  );
}

export default Ranek;
