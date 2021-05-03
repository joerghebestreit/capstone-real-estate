import "./EstatePage.css";
import Filter from "../components/Filter";
import RentBuy from "../components/RentBuy";

export default function EstatePage() {
  return (
    <div className="estateDiv">
      <RentBuy />
      <Filter />
    </div>
  );
}
