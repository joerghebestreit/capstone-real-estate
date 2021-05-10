import "../components/ContactPage.css";
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"

function Map() {
  return ( 
    <GoogleMap defaultZoom={14} defaultCenter={{lat: 52.526846, lng: 13.338450}}>
      <Marker position={{lat: 52.526846, lng: 13.338450}}/>
    </GoogleMap>
    
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

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
      <div className="mapDiv">
        <WrappedMap
          googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAP5KqI2BKvNTDtgTo5dbiS3F34_UvF61M&v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `200px`, width: `345px` }}/>}
          containerElement={<div style={{ height: `200px`, width: `345px` }}/>}
          mapElement={<div style={{ height: `200px`, width: `345px` }}/>}
        />
      </div>
    </div>
  );
}

export default ContactPage;
