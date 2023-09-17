import React, { useEffect, useState } from 'react';
import styles from './ranek.module.css'
import { Link, useParams } from 'react-router-dom';
const Produto = () => {
  const id = useParams()
  const [produto, setProduto] = useState(null);

  useEffect(() => {
     fetch((`https://ranekapi.origamid.dev/json/api/produto/${id.id}`))
    .then((response) => {
      return response.json()
    }).then((json) => {
      setProduto(json)
    })
  }, [])

  if(produto === null) return null;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Ranek</h1>
        
        <Link to={'/'}><button>Produtos</button></Link>
        <Link to={'/contato'}><button>Contato</button></Link>
      </div>
      <div className={styles.containerProduto} >
        <img className={styles.produtoSrc}src={produto.fotos[0].src} alt="" />
        <div className={styles.produtoInfo}>
          <h2>{produto.nome}</h2>
          <span>R$ {produto.preco}</span>
          <p>{produto.descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default Produto;
