import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Kontakt() {
  

  function sendEmail(e) {
    e.preventDefault();
 
    emailjs.sendForm('service_imy33jm', 'template_ctz29qq', e.target, 'sKWxRsnWG_dbAuEqy')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
   
    });
    e.target.reset()
 
  }

  return (
  <div className="body">
    
    <div className="rubrik-sida">
    <h1 className="rubrik-pages">Hur kan vi hjälpa dig?</h1> 
      <p className="dev-comments" >Kontakta oss!</p>
      <p className="page-text">info@maximeraprofil.se</p>
      <p className="page-text">072 278 69 73</p> 

      </div>

      <form onSubmit={sendEmail} className="contact-form">
        <div className="input-box">
        <label> Namn:
          <input 
          type="text" 
          name="username"
          />
        </label>
        </div>

        <div className="input-box">
        <label> Email:
          <input
          type="text" 
          name="email"
          />
          </label>
        </div>
        <div className="input-box"> 
        <label> Rubrik:
          <input
          type="text" 
          name="rubrik"
          />
        </label>
        </div>

        <div className="input-box">
        <label> Meddelande:
          <textarea
          type="text" 
          name="message"
          rows="4"
          cols="30">
          </textarea>
        </label>
        </div>

        <input className="submit" type="submit" value="Skicka" />
        </form>
    
    </div>
  );
};
