import React, { useEffect, useState } from 'react';
import styles from './ranek.module.css'
import { useParams } from 'react-router-dom';
import Header from './components/Header';

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
      <Header />
      <div className={styles.containerProduto} >
        <div className={styles.fotos}>
          {produto.fotos.map((foto) => {
            return <img className={styles.produtoSrc} src={foto.src} alt="" />
          })}
        </div>
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
