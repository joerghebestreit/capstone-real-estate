import "./EstatePage.css"
import { useState } from "react";


export default function EstatePage() {
  return (
    <div className="estateDiv">
        <RentBuy />
        <Filter />
      </div>
    );
}

// Rent | Buy----------------------------------------------------------------------

function RentBuy() {
  const [active, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="rentBuyDiv">
      <p onClick={handleToggle} className={!active ? "rent" : "rentClicked"}>Buy</p>
      <hr></hr>
      <p onClick={handleToggle} className={active ? "buy" : "buyClicked"}>Rent</p>
    </div>
  )
}

// Filter--------------------------------------------------------------------------

function Filter() {

    const [active, setActive] = useState("false");
  
    const handleTurn = () => {
      setActive(!active);
    };



    return(    
    <div className={!active ? "filterDivTotal" : "filterDivTotalActiv"}>
      <div  onClick={handleTurn} className="section1">
        <svg className={!active ? "svgChevron" : "svgChevronTurned"}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z"
            fill="#94d3f0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
            fill="#94d3f0"
          />
        </svg>
        <p>Filter</p>
      </div>
      {!active && <Filter2/>}
    </div>
    )
    function Filter2() {
      return(
          <div className={active ? "section2Aktiv" : "section2"}>
              <p className="p2">Price</p>
              <div className="inputDiv">
                <input className="input" placeholder="from"></input>
                <input className="input" placeholder="to"></input>
              </div>
              <p className="p2">City</p>
              <input className="input"></input>
              <p className="p2">Square Feet</p>
              <div className="inputDiv">
                <input className="input2" placeholder="from"></input>
                <input className="input2" placeholder="to"></input>
              </div>
            </div> 
      )
      }
  }

// API Data------------------------------------------------------------------------

// function AllPropertys() {
//   return(
//     apartments
//   );
// }

// function PropertyCard() {

// }