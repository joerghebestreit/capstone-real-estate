import ReactMapGL, {Marker} from "react-map-gl"
import {useState} from "react"
import {FaMapMarkerAlt} from "react-icons/fa"
import "./ContactPage.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default function Map() {
    // @ts-ignore
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

    const [viewport, setViewport] = useState({
      latitude: 52.526846,
      longitude: 13.338450,
      zoom: 14,
      width: "345px",
      height: "200px",
    });
    return (
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          //onViewportChange={setViewport}
          mapStyle="mapbox://styles/joerghebestreit/ckoiv5hbi4kvm18mule3ubvpy"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <Marker latitude={52.526846} longitude={13.338450} offsetLeft={-20} offsetTop={-10}>
            <div className="pinText"><FaMapMarkerAlt className="pin"/>  Hebestreit Immo</div>
          </Marker>
        </ReactMapGL>
      </div>
    )
}