import React, {useState} from 'react'


export default function Header() {
  
  const [showLinks, setShowLinks] = useState(false);
  
  
  return (
  
  <div className="Navbar">
    
    <div className="leftSide">
    <a href="/" className="nav-item" id="nav-logo">MaxiMera Profil</a>
    </div>

    <div className="rightSide">
      <div className="links" id={showLinks ? "hidden" : ""}>
        <a href="/tjanster" id="nav-links" className="nav-item">TJÄNSTER</a>
        <a href="/datafetching" id="nav-links"className="nav-item">PRODUKTER</a>
         <a href="/kontakt" id="nav-links"className="nav-item">KONTAKT</a>
        <a href="/omoss" id="nav-links"className="nav-item">OM OSS</a>
        
      </div>

      <div onClick={() => setShowLinks(!showLinks)} className="burger-div">
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        </div>
    </div>   
  </div>
  );
}

