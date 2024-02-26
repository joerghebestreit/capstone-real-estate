import "../components/ContactPage.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Form from "./Form";
import Map from "./Map";
import 'mapbox-gl/dist/mapbox-gl.css';

function ContactPage(setViewport) {
  return (
    <div className="contact-content">
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
          <FaPhoneAlt className="svgPhone" />
          <p className="phoneNumber">030 / 5 44 00 59</p>
        </div>
        <br></br>
        <div className="phoneIconNumber">
          <HiOutlineMail className="svgMail" />
          <p className="mailAdress">info@hebestreit-immobilien.com</p>
        </div>
        <hr className="hrMap"></hr>
        <div className="mapDiv">
          <Map setViewport={setViewport} />
        </div>
        <hr className="hrForm"></hr>
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;
