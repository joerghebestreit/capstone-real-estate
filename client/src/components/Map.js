import ReactMapGL, {Marker} from "react-map-gl"

export default function Map() {
    const [viewport, setViewport] = useState({
      latitude: 52.526846,
      longitude: 13.338450,
      zoom: 14,
      width: "92vw",
      height: "55vw",
    });
    return ( 
  
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <Marker latitude={52.526846} longitude={13.338450} offsetLeft={-20} offsetTop={-10}>
            <div>Hebestreit Immo</div>
          </Marker>
        </ReactMapGL>
  
    )
  }