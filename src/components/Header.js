import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const bookings = useSelector((state) => state.bookings);  // 👈 Redux Hook

  return (
    <div style={{ background: "#d32f2f", color: "white", textAlign: "center", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ color: "white", textAlign: "center", textDecoration: "none" }}><h2 style={{ margin: 0 }}>BookMyShow</h2></Link>
      <Link to="/confirmation" style={{ color: "white" }}>🎟 {bookings.length} Tickets</Link>
    </div>
  );
}

export default Header;