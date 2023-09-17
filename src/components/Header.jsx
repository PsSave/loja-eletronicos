import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Ranek</h1>
      <Link to={'/'}><button>Produtos</button></Link>
      <Link to={'/contato'}><button>Contato</button></Link>
    </div>
  );
}

export default Header;
