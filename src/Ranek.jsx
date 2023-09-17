import React, { useEffect, useState } from 'react';
import styles from './ranek.module.css'
import { Link } from 'react-router-dom';
import Header from './components/Header';
const Ranek = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setProdutos(json)
      })
  }, [])

  if(produtos === null) return null;
  console.log(produtos)
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.produtos}>
        {produtos.map((produto) => {
          return (
            <Link to={`/produtos/${produto.id}`}>
              <div key={produto.id} className={styles.produto}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                <h1>{produto.nome}</h1>
              </div>
            </Link>
            
          )
        })}
      </div>
    </div>
  );
}

export default Ranek;
