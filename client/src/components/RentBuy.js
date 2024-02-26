import "./EstatePage.css";
import { useState, useEffect } from "react";


export default function RentBuy({onRentBuyChange}) {
  const [selected, setSelected] = useState("buy");

  useEffect(() => {
    onRentBuyChange(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  let handleToggle = (propertyOption) => {
    setSelected(propertyOption)
  }

  return (
    <div className="rentBuyDiv">
      <p onClick={() => handleToggle("buy")} className={selected === "buy" ? "buyClicked" : "buy"}>
        Buy
      </p>
      <hr></hr>
      <p onClick={() => handleToggle("rent")} className={selected === "rent" ? "rentClicked" : "rent"}>
        Rent
      </p>
    </div>
  );
}
