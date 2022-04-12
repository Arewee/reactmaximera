import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="box one">
          <img className="box-image" src="https://picsum.photos/200/300" alt='' />
        <h2>Profilreklam produkter</h2>
        <p>text here</p></div>
        
        <div className="box two">Personliga produkter</div>
        
        <div className="box three">Sportklubbar</div>
        
        <div className="box four">Webbsupport</div>
        
        <div className="box five">Introtext Maximera Profil </div>
      </div>
      <img className="picsumImage" src="https://picsum.photos/600/400"></img>
    </div>
  )
}
