import React from 'react'
import StaffPic from '../../assets/staff-dummy-image.jpeg';

export default function Omoss() {
  return (
    <div className="body">    
      
      <div className="rubrik-sida">
    <h1 className="rubrik-pages">Maximera Profil</h1> 
      <p className="dev-comments-om" >Du önskar, vi skapar! Det är vår paroll. Med det tänker vi att vi hjälper våra kunder att ge liv åt sina önskningar. Ibland kan allt börja med en idé som behöver hjälp av växa fram. Det är där vi kan bidra. Vi började på samma sätt. Vilken är din idé? </p>
    

      </div>

    <div className="staff-container">
      <div className="staff-presentation">
      <img className="omoss-img" src={StaffPic} />
      <h5>Kristin Viitanen</h5>
      <p className="staff-details">Ekonomi</p>
      <p className="staff-details">kristin@maximeraprofil.se</p>
      </div>

      <div className="staff-presentation">
      <img className="omoss-img" src={StaffPic} />
      <h5>Lena Simlund</h5>
      <p className="staff-details">Försäljning och Marknad</p>
      <p className="staff-details">lena@maximeraprofil.se</p>
      </div>

      <div className="staff-presentation">
      <img className="omoss-img" src={StaffPic}/>
      <h5>Rosa Liljefors</h5>
      <p className="staff-details">Webbutveckling</p>
      <p className="staff-details">rosa@maximeraprofil.se</p>
      </div>

      <div className="staff-presentation">
      <img className="omoss-img" src={StaffPic} />
      <h5>Rufus Murphy Barkalot</h5>
      <p className="staff-details">Byråhund</p>
      <p className="staff-details">kristin@maximeraprofil.se</p>
      </div>
    </div>


    <p className="dev-comments">Om oss</p>
    <p className="page-text">2007 grundades Maximera Profil AB, med mål och ambition att vara den ledande nätbutiken för exklusiva namnplagg inom Norden. Målet var att inspirera genom att erbjuda en förstklassig shoppingupplevelse och den bästa kundservicen med våra egna designer i en mix av bodys, tröjor, onesies, byxor, filtar, ryggsäckar och accessoarer.

Som ett steg i att uppnå vårt mål att vara den ledande nätbutiken för exklusiva namnplagg inom Norden, genomfördes i september 2018 namnbytet till 2you.se. Genom namnbytet ändrade vi också vår inriktning från att i huvudsak erbjuda kläder och accessoarer till barn, till att även erbjuda ett brett sortiment till ungdomar och vuxna.

Hos 2you.se hittar du bland annat kläder, filtar, väskor, ryggsäckar, nyckelband, tygkassar, vantar och mössor. Allt i vårt sortiment går att få med eget valfritt tryck. Vi trycker personliga namn eller andra budskap från endast 1st, vi har inga minimum kvantiteter. Du önskar och vi skapar!

Vi erbjuder även företag allt inom profilreklam och profilkläder – kontakta oss gärna på info@maximeraprofil.se för en offert och mer information.
    </p>
 
     
     </div>
  )
}
