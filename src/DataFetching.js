import React from 'react'
import { useState, useEffect } from 'react';

export default function DataFetching() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [models, setModels] = useState([]);
  const [visible, setVisible] =useState(6);
  const [products, setProducts]=useState([]);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  
  const prevPage=()=> {
    if(page>1)
    setPage(page-1)
  }

  const nextPage=()=> {
      setPage(page+1)
  }

  const imageBaseUrl = `https://images.pfconcept.com/ProductImages_All/JPG/500x500/`

  const showMoreItems = () => [
    setVisible((prevValue) => prevValue + 5)
  ]

  useEffect(() => {
    fetch(`https://pb-back.herokuapp.com/models?limit=${limit}&page=${page}`)
    .then(response => response.json())
    
    .then(
      (result) => {
        setIsLoaded(true);
        setModels(result);
        setProducts(result);
          
      }
    )
    .catch(error=>{
      console.log(error)
      setError(error)
    })
     
  }, [page])
  
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
      <p className="page-text">
      Vi har produkterna som behövs för att kunna profilera företag, stora som små. Profilering är viktig för att bygga relationer, få kunder och konsumenter att komma ihåg varumärket och även såklart gentemot den egna personalen. Det kan vara promotionmaterial, give-aways, personalgåvor, personalkläder och skräddarsydda lösningar utifrån ert behov.
    </p>
 

    <p className="page-text">Bläddra gärna igenom några av våra produktexempel nedan:</p>

        <section className="productSection">
          {models && models.slice(0, visible).map(item => {
            return (
              <div className="productBox" key={item._id}>
                <img className="productImage" src={`${imageBaseUrl}/${item.items[0].item.imageData.imageMain}`} alt="" />
                <p className="product-id">{item.modelCode}</p>
                <p className="produktTitel">{item.description}</p>
                {/*<p className="product-info">{item.extDesc}</p>*/}
                
               
              </div>
            )
          })}
            

        </section>
        <div className="browseBtns">
        <button className="prevBtn" onClick={prevPage}>{"<="}  Tillbaka</button>
        <button className="nextBtn" onClick={nextPage}>Visa fler {"=>"}</button>
        </div>

        {/*<button onClick={showMoreItems}>Visa fler</button>*/}
      </div>



      </div>
    );
  }
}