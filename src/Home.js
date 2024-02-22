import React from "react";
import Mxlogo from "./assets/maximer__svart.png";
import Hat from "./assets/liam_hat.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="box one">
          <img className="box-image" src={Mxlogo} alt="" />
          <div className="MXbannerInfo">
            <h2 className="MXbannerTitle">MaxiMera Profil </h2>
            <p className="MXbannerText">
              Profilreklam, personliga produkter och webbsupport till företag och föreningar
            </p>
          </div>
          <img className="box-image2" src={Hat} alt="" />
        </div>

        <div className="box two">
          <img
            className="homeBoxImage"
            src="https://cdn.abicart.com/shop/ws29/40029/art29/h6933/161256933-origpic-964d07.jpg?max-width=720&max-height=720&quality=70&fmt=avif"
          />
          <h3 className="boxTitle">Personliga produkter</h3>
          <p className="boxText">Hos oss kan du hitta lösninar med personlig touch oavsett kvatitet</p>
        </div>

        <div className="box three">
          <img
            className="homeBoxImage"
            src="https://cdn.abicart.com/shop/ws29/40029/files/vattenflaska%20hej.jpg?max-width=720&max-height=600&quality=85&resize=crop&fmt=avif"
          />
          <h3 className="boxTitle">Sportklubbar</h3>
          <p className="boxText">
            För klubbar och föreningar som vill ha en flexibel kollektion av kläder och proudukter
          </p>
        </div>

        <div className="box four">
          <img
            className="homeBoxImage"
            src="https://img.freepik.com/free-photo/smiling-woman-using-laptop-computer_171337-19369.jpg?w=2000&t=st=1650377691~exp=1650378291~hmac=ec7ce924f91c81c92e7267b1af50b9fa1a8b5ac4c02e108083e4f57ce1535d90"
          />
          <h3 className="boxTitle">Webbsupport</h3>
          <p className="boxText">
            Hjälp med en egen hemsida? <br></br>Med oss kommer du igång!
          </p>
        </div>

        <div className="box five">
          <p className="MXbannerTextKontakt">
            Med oss hittar du en fungerande lösning oavsett om det är till ett företag eller förening. Hör av dig med
            och berätta vad du vill ha hjälp så böjar vi där.{" "}
          </p>
          <a href="/kontakt">
            <button type="button" className="btn">
              Kontakta oss!
            </button>
          </a>
        </div>
      </div>
      <img
        className="picsumImage"
        src="https://cdn.abicart.com/shop/ws29/40029/art29/h5707/173635707-origpic-6a1919.png?max-width=720&max-height=720&quality=70&fmt=avif"
      ></img>
    </div>
  );
}
