import "./EstatePage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import RentBuy from "../components/RentBuy";

export default function EstatePage() {
  const [properties, setProperties] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/properties/`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setProperties((property) => {
          return [...property, ...apiData];
        });
      });
  }, []);

  function renderProptery() {
    return properties.map((property) => {
      return (
        <Link className="linkBox" to={`/Details/${property.ID}`}>
          <div className="propertyCard">
            <img className="img" src={property.img[0]} />
            <div className="shortData">
              <div className="shortData2">
                <p className="p">{property.City}</p>
                <p className="p">{property.Street}</p>
              </div>
              <hr className="hr-h"></hr>
              <p className="p">{property.Price}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="estateDiv">
      <RentBuy />
      <Filter />
      <ul className="propteryList">{renderProptery()}</ul>
    </div>
  );
}
