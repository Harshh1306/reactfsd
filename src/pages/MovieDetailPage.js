import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers", price: 300, genre: "Action", description: "Earth's mightiest heroes unite.", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420946/avengers_lxxg97.jpg" },
  { id: 2, title: "Batman", price: 250, genre: "Action", description: "The dark knight rises.", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/batman_hfcliy.jpg" },
  { id: 3, title: "Jawan", price: 200, genre: "Thriller", description: "A high-octane action thriller.", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/jawan_difip3.jpg" },
  { id: 4, title: "Inception", price: 280, genre: "Sci-Fi", description: "A thief who enters dreams.", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420948/inception_gudxac.png" },
];

function MovieDetailPage() {
  const { id } = useParams();   // 👈 Routing Hook
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img 
        src={movie.image} 
        alt={movie.title} 
        style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#333", marginBottom: "10px" }}>{movie.title}</h2>
      <p style={{ color: "#666", marginBottom: "8px" }}>Genre: {movie.genre}</p>
      <p style={{ marginBottom: "8px" }}>{movie.description}</p>
      <p style={{ fontWeight: "bold", color: "#007bff", fontSize: "18px", marginBottom: "20px" }}>Price per ticket: ₹{movie.price}</p>
      <Link to={`/booking/${movie.id}`}>
        <button style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          padding: "12px 24px", 
          borderRadius: "4px", 
          cursor: "pointer", 
          fontSize: "16px"
        }}>Book Now</button>
      </Link>
    </div>
  );
}

export default MovieDetailPage;