import "../components/Details.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";


export default function Details() {
  const { ID } = useParams();
  const history = useHistory();
  const [property, setProperty] = useState({});
 
    console.log("Hallo von Details")
    console.log(ID)
  useEffect(() => {
      const url = `http://localhost:4000/properties/${ID}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setProperty(apiData[0]);
        console.log(apiData);
      });
  }, [ID]);


  return (
    <div className="detailDiv">
      <div className="p-1">
        <div className="p-1-1">
          <p className="p">{property.City}</p>
          <p className="p">{property.Street}</p>
        </div>
        <div className="p-1-2">
          <p className="p">{property.Price}</p>
          <p className="p">{property.ID}</p>
        </div>
      </div>
      <hr></hr>
      <div className="p-2">
        <p className="p">{property.YearBuild}</p>
        <p className="p">{property.Interior}</p>
        <p className="p">{property.Bedrooms}</p>
        <p className="p">{property.Status}</p>
      </div>
      <hr></hr>
      <p className="p">{property.Discription}</p>
      <button className="btn" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}
