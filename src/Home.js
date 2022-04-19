import React from 'react';
import Mxlogo from '/Users/richardviitanen/reactmaximera/src/assets/maximer__svart.png';
import Hat from '/Users/richardviitanen/reactmaximera/src/assets/liam_hat.png';

export default function Home() {
  return (
    <div className="home">

      <div className="home-container">
          
        <div className="box one">
            <img className="box-image" src={Mxlogo} alt='' />
              <div className="MXbannerInfo">
                <h2 className="MXbannerTitle">MaxiMera Profil </h2>
                <p className="MXbannerText">Profilreklam, personliga produkter och webbsupport till företag och föreningar</p>
              </div>
            <img className="box-image2" src={Hat} alt='' />
        </div>
          
        <div className="box two">
        <img src="https://picsum.photos/300" />
        <h3 className="boxTitle">Personliga produkter</h3>
        <p className="boxText">mera text här</p>
        </div>
          
          <div className="box three">
          <img src="https://picsum.photos/300" />
        <h3 className="boxTitle">Sportklubbar</h3>
        <p className="boxText">mera text här</p>
          </div>
          
          <div className="box four">
          <img src="https://picsum.photos/300" />
        <h3 className="boxTitle">Webbsupport</h3>
        <p className="boxText">mera text här</p>
          </div>
          
        <div className="box five">Introtext Maximera Profil 
    
                <p className="MXbannerText">Säljande text om företagets förträfflighet som gör att kunder vill anlita Maximera för samrarbeten</p>
                <a href="/kontakt">
                <button type="button" className="btn">
                  Kontakta oss!
                </button>
              </a>
        </div>
      
      </div>
      <img className="picsumImage" src="https://picsum.photos/600/400"></img>
    
    
    </div>
  )
}
