import "./EstatePage.css";
import { useState } from "react";

export default function RentBuy({onRentBuy}) {
  const [active, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!active);
    onRentBuy(active)
  };

  return (
    <div className="rentBuyDiv">
      <p onClick={handleToggle} className={!active ? "rent" : "rentClicked"}>
        Buy
      </p>
      <hr></hr>
      <p onClick={handleToggle} className={active ? "buy" : "buyClicked"}>
        Rent
      </p>
    </div>
  );
}
