import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const movies = [
  { id: 1, title: "Avengers", price: 300, image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420946/avengers_lxxg97.jpg" },
  { id: 2, title: "Batman", price: 250, image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/batman_hfcliy.jpg" },
  { id: 3, title: "Jawan", price: 200, image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/jawan_difip3.jpg" },
  { id: 4, title: "Inception", price: 280, image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420948/inception_gudxac.png" },
];

function BookingPage() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [tickets, setTickets] = useState(1);   // 👈 useState Hook
  const dispatch = useDispatch();              // 👈 Redux Hook
  const navigate = useNavigate();

  function handleBook() {
    for (let i = 0; i < tickets; i++) {
      dispatch({ type: "ADD_TICKET", payload: movie });  // 👈 sends to Redux
    }
    navigate("/confirmation");
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img 
        src={movie?.image} 
        alt={movie?.title} 
        style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Booking: {movie?.title}</h2>
      <p style={{ color: "#666", marginBottom: "8px" }}>Price per ticket: ₹{movie?.price}</p>
      <label style={{ display: "block", marginBottom: "8px" }}>Number of tickets: </label>
      <input
        type="number"
        min="1"
        max="10"
        value={tickets}
        onChange={(e) => setTickets(parseInt(e.target.value))}
        style={{ padding: "8px", marginBottom: "16px", width: "100px" }}
      />
      <p style={{ fontWeight: "bold", color: "#007bff", fontSize: "18px", marginBottom: "20px" }}>Total: ₹{movie?.price * tickets}</p>
      <button 
        onClick={handleBook}
        style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          padding: "12px 24px", 
          borderRadius: "4px", 
          cursor: "pointer", 
          fontSize: "16px"
        }}
      >Confirm Booking</button>
    </div>
  );
}

export default BookingPage;