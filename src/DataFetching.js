import React from 'react'
import { useState, useEffect } from 'react';

export default function DataFetching() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [models, setModels] = useState([]);
  const [visible, setVisible] =useState(5);
  
  const showMoreItems = () => [
    setVisible((prevValue) => prevValue + 5)
  ];
  
  useEffect(() => {
    fetch('https://pb-back.herokuapp.com/models')
    .then(response => response.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setModels(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
    }
    )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

   

    return (
    <div className="body">
    <div className="rubrik-sida">
    <h1 className="rubrik-pages">Produkter</h1> 
      <p className="dev-comments" >Profilreklam, presentreklam och skräddarsydda produkter</p>
      </div>

      <div>
        <h3>Alla produkter</h3>
        <section className="productSection">
          {models.slice(0, visible).map(item => {
            return (
              <div className="productBox" key={item.id}>
                <img className="productImage" src="https://picsum.photos/200" />
                <p className="produktTitel">{item.description}</p>
                <p className="product-id">{item.modelCode}</p>

              </div>
            )
          })}
            

        </section>
        <button onClick={showMoreItems}>Visa fler</button>
      </div>



      </div>
    );
  }
}