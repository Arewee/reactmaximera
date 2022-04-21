import React from 'react'
import LapTopImage from '../../../src/assets/laptop_image.jpg';
import PhoneImage from'../../../src/assets/phone-imge-ecom.jpg';

export default function Tjanster() {
  return (
    <div className="body">
         <div className="rubrik-sida">
        <h1 className="rubrik-pages">Tjänster</h1> 
        <img className="box-image" src={LapTopImage} alt='' />
          <p className="dev-comments" >Hemsida, e-handel, marknadsföring och affärsutveckling</p>
          <p className="page-text">Webb och ehandel är våra huvudsakliga försäljningskanaler. Med det har vi jobbat sedan starten för 15 år sedan. Det är en snabb kanal där effekten ofta kommer snabbt bara man kommer igång. Men det är också ett område under konstant förändring och utveckling. Vi vet hur man kommer igång, vad som krävs för ett mindre företag att starta igång hemsidor och ehandel. Detta oavsett om man har för avsikt att sköta allt själv men behöver hjälp att komma igång, eller få någon som sköter det praktiska så man kan fokusera på det man är bra på själv. Man kan också att få  support och avlastning löpande när man behöver. Hör av er så hittar vi en lösning som passar just er!
          </p>
      </div>

        <div className="tjansterContainer">
          <div className="tjansterBox">
          <h2 className="tjansterTitle">Egen hemsida</h2>
          <p className="page-text">Med oss kommer du igång med en egen hemsida. Vi hjälper dig med att skapa en statisk sida där kunder och konsumenter kan ta del av ditt företags erbjudande och konatakta er för mer information. Som bas använder vi Wordpress som är den mest spridda plattformen i världen men många tillägg man kan använda sig av. Vi har också erfarenhet av e-handel då vi själva driver flera sidor. Allt börjar med att diskutera vad ni som företag eller förening behöver!
          </p>
        </div>
        <div className="tjansterBoxEcom">
          <h2 className="tjansterTitle">E-handel</h2>
          <p className="page-text">Skall du starta e-handel är en e-handelssida ett måste. Men det finns många andra saker som måste finnas på plats också. En bra distributionslösning för för att kunna leverera fysiska produkter, betalningslösningar för att kunna ta och få betalt på ett effektivt och säkert sätt samt en smidig orderhantering som också kan sköta returer och reklamationer.
          </p>
          </div>
          <div className="tjansterBox">
          <h2 className="tjansterTitle">Marknadsföring och affärsutveckling</h2>
          <p className="page-text">En hemsida behöver oftast hjälp att nå ut till potentiella kunder. Sökordsoptimering för att få träffar i olika sökmotorer, annonsering i sociala medier och också själv skapa närvaro på tex Facebook, Instagram etc för att skapa en egen kanal att nå ut. Vi hjälper dig att komma igång!
          </p>
          <div className="space"></div>
          <img className="box-image3" src={PhoneImage} alt='' />
        </div>
       

      </div>

    </div>
  )
}
