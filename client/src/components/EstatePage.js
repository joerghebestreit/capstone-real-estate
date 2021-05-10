import "./EstatePage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import RentBuy from "../components/RentBuy";

export default function EstatePage() {
  const [properties, setProperties] = useState([]);
  // const { ID } = useParams();
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");

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
    return properties.filter((property) => {
      if(search === "") {
        return property
      } else if (property.City.toLowerCase().includes(search.toLowerCase())){
        return property
      
      }}).filter((property) => {
        if(search1 === "" && search2 === "" ) { return true }
        else{
        if (Number(search2) > 0) {
          if (Number(property.Price) > Number(search1) && Number(property.Price) <= Number(search2)) {
          return true}}
          else{
            if (Number(property.Price) >= Number(search1)){
              return true
            }
          }
        }
      // }}).filter((property) => {
      //   if(search3 === "" && search4 === "" ) { return true }
      //   else{
      //   if (Number(search4) > 0) {
      //     if (Number(property.Interior) > Number(search3) && Number(property.Interior) <= Number(search4)) {
      //     return true}}
      //     else{
      //       if (Number(property.Interior) >= Number(search3)){
      //         return true
      //       }
      //     }
      //   }
    }).map((property) => {
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
              <p className="pp">{property.Price} €</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="estateDiv">
      <RentBuy />
      <Filter setSearch={setSearch} search={search} setSearch1={setSearch1} search1={search1} setSearch2={setSearch2} search2={search2} setSearch3={setSearch3} search3={search3} setSearch4={setSearch4} search4={search4}/>
      <ul className="propteryList">{renderProptery()}</ul>
    </div>
  );
}


// if (Number(property.Interior) > Number(search3) && Number(property.Interior) < Number(search4)) {
//   return true