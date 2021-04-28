import "./EstatePage.css"

export default function EstatePage() {
  return (
    <div className="estateDiv">
        <RentBuy />
      </div>
    );
}
  
function RentBuy() {
  return (
    <div className="rentBuy">
      <p>Buy</p>
      <hr></hr>
      <p>Rent</p>
    </div>
  )
}