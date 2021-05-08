import "../components/About.css";
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"

function ContactPage() {
  return (
    <div className="textContainer">
      <h4>Contact</h4>
      <br></br>
      <br></br>
      <p>HEBESTREIT IMMOBILIEN</p>
      <br></br>
      <p>Wildrosenweg 87</p>
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
    </div>
  );
}

export default ContactPage;
