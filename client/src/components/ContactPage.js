import "../components/ContactPage.css";
import {useState} from "react"
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import ReactMapGL from "react-map-gl"
import Form from "./Form"

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 52.526846,
    longitude: 13.338450,
    zoom: 14,
    width: '345px',
    heigth: '200px',
  });
  return ( 
    <div>
      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}></ReactMapGL>
      {/* <GoogleMap defaultZoom={14} defaultCenter={{lat: 52.526846, lng: 13.338450}}>
        <Marker position={{lat: 52.526846, lng: 13.338450}}/>
      </GoogleMap> */}
    </div>
  )
}

// const WrappedMap = withScriptjs(withGoogleMap(Map));

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
        <Map />
        {/* <WrappedMap
          googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAP5KqI2BKvNTDtgTo5dbiS3F34_UvF61M&v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `200px`, width: `345px` }}/>}
          containerElement={<div style={{ height: `200px`, width: `345px` }}/>}
          mapElement={<div style={{ height: `200px`, width: `345px` }}/>}
        /> */}
      </div>
      <hr className="hrForm"></hr>
      <Form/>
    </div>
  );
}

export default ContactPage;
