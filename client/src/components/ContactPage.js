import "../components/ContactPage.css";
import {useState} from "react"
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import Form from "./Form"
import Map from "./Map"

function ContactPage() {
  return (
    <div className="textContainerContactPage">
      <h4>Contact</h4>
      <br></br>
      <br></br>
      <p>HEBESTREIT IMMOBILIEN</p>
      <br></br>
      <p>Mathilde-Jacob-Platz 1</p>
      <br></br>
      <p>10711 Berlin</p>
      <br></br>
      <br></br>
      <div className="phoneIconNumber">
        <FaPhoneAlt className="svgPhone"/>
        <p className="phoneNumber">030 / 5 44 00 57</p>
      </div>
      <br></br>
      <div className="phoneIconNumber">
        <HiOutlineMail className="svgMail"/>
        <p className="mailAdress">info@hebestreit-immobilien.com</p>
      </div>
      <hr className="hrMap"></hr>
      <div className="mapDiv">
        <Map property={setViewport}/>
      </div>
      <hr className="hrForm"></hr>
      <Form/>
    </div>
  );
}

export default ContactPage;
