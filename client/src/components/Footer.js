import "./Footer.css";
import {AiFillFacebook} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FaInstagram, FaPhoneAlt} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.facebook.com/" class="external" target="_blank">
          <AiFillFacebook className="fbIcon"/>
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <FaInstagram className="instaIcon"/>
        </a>
      </div>
      <a href="tel:+900300400" className="phoneIconNumberA">
        <div className="phoneIconNumber">
          <FaPhoneAlt className="svgPhone2"/>
          <p className="phoneNumberFooter">030 / 5 44 00 57</p>
        </div>
      </a>
    </div>
  );
}

export default Footer;
