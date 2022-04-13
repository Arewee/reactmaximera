import React, { useState } from 'react';


export default function Kontakt() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({})
    }


 

 
  return (
  <div className="body">
    
    <h2>Kontakt</h2> 
      <p className="dev-comments" >Lägg till: Kontaktinfo med mail, telefon etc.</p>
      <p className="page-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab ullam expedita soluta cum repellendus, voluptas iste amet deleniti dolore sunt, recusandae minus laboriosam. Veniam!
      </p>  

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-box">
        <label> Namn:
          <input 
          type="text" 
          name="username"
          onChange={handleChange}
          value={inputs.username || ""}
          />
        </label>
        </div>

        <div className="input-box">
        <label> Email:
          <input
          type="text" 
          name="email"
          onChange={handleChange}
          value={inputs.email || ""}
          />
        </label>
        </div>

        <div className="input-box">
        <label> Meddelande:
          <input
          type="text" 
          name="message"
          onChange={handleChange}
          value={inputs.message || ""}
          />
        </label>
        </div>

      
        <input className="submit" type="submit" value="Skicka" />
      </form>
    </div>
  )
}
