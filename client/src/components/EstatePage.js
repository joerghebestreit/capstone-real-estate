import "./EstatePage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import RentBuy from "../components/RentBuy";

export default function EstatePage() {
  const [properties, setProperties] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchPriceFrom, setSearchPriceFrom] = useState("");
  const [searchPriceTo, setSearchPriceTo] = useState("");
  const [searchInteroirFrom, setSearchInteroirFrom] = useState("");
  const [searchInteroirTo, setSearchInteroirTo] = useState("");
  const [searchOption, setSearchOption] = useState("buy");

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/properties`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setProperties((property) => {
          return [...property, ...apiData];
        });
      });
  }, []);

  function handleRentBuyChange(filter) {
    setSearchOption(filter);
  }

  function renderPropterties() {
    return properties
      .filter((property) => {
        return property.option === searchOption;
      })
      .filter((property) => {
        if (searchCity === "") {
          return property;
        } else if (
          property.City.toLowerCase().includes(searchCity.toLowerCase())
        ) {
          return property;
        }
      })
      .filter((property) => {
        if (searchPriceFrom === "" && searchPriceTo === "") {
          return true;
        } else {
          if (Number(searchPriceTo) > 0) {
            if (
              Number(property.Price) > Number(searchPriceFrom) &&
              Number(property.Price) <= Number(searchPriceTo)
            ) {
              return true;
            }
          } else {
            if (Number(property.Price) >= Number(searchPriceFrom)) {
              return true;
            }
          }
        }
      })
      .filter((property) => {
        if (searchInteroirFrom === "" && searchInteroirTo === "") {
          return true;
        } else {
          if (Number(searchInteroirTo) > 0) {
            if (
              Number(property.Interior) > Number(searchInteroirFrom) &&
              Number(property.Interior) <= Number(searchInteroirTo)
            ) {
              return true;
            }
          } else {
            if (Number(property.Interior) >= Number(searchInteroirFrom)) {
              return true;
            }
          }
        }
      })
      .map((property) => {
        return (
          <Link className="linkBox" to={`/Details/${property.ID}`}>
            <div className="propertyCard">
              <img className="img" alt="" src={property.img[0]} />
              <div className="shortData">
                <div className="shortData2">
                  <p className="adress">{property.City}</p>
                  <p className="adress">{property.Street}</p>
                </div>
                <hr></hr>
                <p className="price">{property.Price} €</p>
              </div>
            </div>
          </Link>
        );
      });
  }

  return (
    <div className="estateDiv">
      <RentBuy onRentBuyChange={handleRentBuyChange} />
      <Filter
        setSearchCity={setSearchCity}
        searchCity={searchCity}
        setSearchPriceFrom={setSearchPriceFrom}
        searchPriceFrom={searchPriceFrom}
        setSearchPriceTo={setSearchPriceTo}
        searchPriceTo={searchPriceTo}
        setSearchInteroirFrom={setSearchInteroirFrom}
        searchInteroirFrom={searchInteroirFrom}
        setSearchInteroirTo={setSearchInteroirTo}
        searchInteroirTo={searchInteroirTo}
      />
      <ul className="propteryList">{renderPropterties()}</ul>
    </div>
  );
}
