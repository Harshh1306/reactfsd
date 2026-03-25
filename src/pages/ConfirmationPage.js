import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ConfirmationPage() {
  const bookings = useSelector((state) => state.bookings);  // 👈 reads Redux store
  const dispatch = useDispatch();
  const total = bookings.reduce((sum, m) => sum + m.price, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Booking Confirmed! 🎉</h2>
      {bookings.length === 0 && <p>No tickets booked yet.</p>}
      {bookings.map((movie, index) => (
        <div key={index} style={{ 
          display: "flex", 
          alignItems: "center", 
          padding: "16px", 
          borderBottom: "1px solid #eee",
          gap: "16px"
        }}>
          <img 
            src={movie.image} 
            alt={movie.title} 
            style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "4px" }} 
          />
          <div>
            <p style={{ margin: "0", fontWeight: "bold", color: "#333" }}>{movie.title}</p>
            <p style={{ margin: "4px 0", color: "#666" }}>₹{movie.price}</p>
          </div>
        </div>
      ))}
      <h3 style={{ color: "#007bff", fontSize: "20px", margin: "20px 0" }}>Total Amount: ₹{total}</h3>
      <button 
        onClick={() => dispatch({ type: "CLEAR_BOOKINGS" })}
        style={{ 
          backgroundColor: "#dc3545", 
          color: "white", 
          border: "none", 
          padding: "10px 20px", 
          borderRadius: "4px", 
          cursor: "pointer", 
          marginRight: "16px"
        }}
      >Clear All</button>
      <br /><br />
      <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>← Back to Home</Link>
    </div>
  );
}

export default ConfirmationPage;