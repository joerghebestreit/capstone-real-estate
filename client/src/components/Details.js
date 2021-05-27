import "../components/Details.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Details() {
  const { ID } = useParams();
  const history = useHistory();
  const [property, setProperty] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/properties/${ID}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setProperty(apiData[0]);
      });
  }, [ID]);

  return property ? (
    <div>
      <Carousel images={property.img} />
      <div className="detailDiv">
        <div className="p-1">
          <section className="p-1-1">
            <p className="p-a">{property.City}</p>
            <p className="p-a">{property.Street}</p>
          </section>
          <section className="p-1-2">
            <p className="p-a">{property.Price} €</p>
            <p className="p-a">ID: {property.ID}</p>
          </section>
        </div>
        <hr className="hr"></hr>
        <div className="p-1">
          <section className="p-2-1">
            <p className="p-m1">Year Build</p>
            <p className="p-m1">Interior</p>
            <p className="p-m1">Bedrooms</p>
            <p className="p-m1">Status</p>
          </section>
          <section className="p-2-2">
            <p className="p-m2">{property.YearBuild}</p>
            <p className="p-m2">{property.Interior} Sq. Ft.</p>
            <p className="p-m2">{property.Bedrooms}</p>
            <p className="p-m2">{property.Status}</p>
          </section>
        </div>
        <hr className="hr"></hr>
        <p className="description">{property.Discription}</p>
        <button className="btn" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
