import React, { useEffect, useState } from 'react';
import styles from './ranek.module.css'
import { Link } from 'react-router-dom';

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
      <div className={styles.header}>
        <h1>Ranek</h1>
        <Link to={'/'}><button>Produtos</button></Link>
        <Link to={'/contato'}><button>Contato</button></Link>
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
    </div>
  );
}

export default Ranek;
