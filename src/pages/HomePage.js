import { useState } from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers", price: 300, genre: "Action", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420946/avengers_lxxg97.jpg" },
  { id: 2, title: "Batman", price: 250, genre: "Action", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/batman_hfcliy.jpg" },
  { id: 3, title: "Jawan", price: 200, genre: "Thriller", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420947/jawan_difip3.jpg" },
  { id: 4, title: "Inception", price: 280, genre: "Sci-Fi", image: "https://res.cloudinary.com/dhhktv0b5/image/upload/v1774420948/inception_gudxac.png" },
];

function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Now Showing</h2>
      <input
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filtered.map(movie => (
          <div key={movie.id} style={{ 
            border: "1px solid #ddd", 
            padding: "16px", 
            borderRadius: "12px", 
            width: "220px", 
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
            transition: "transform 0.2s", 
            cursor: "pointer",
            backgroundColor: "#fff"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img 
              src={movie.image} 
              alt={movie.title} 
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "12px" }} 
            />
            <h3 style={{ margin: "8px 0", fontSize: "18px", color: "#333" }}>{movie.title}</h3>
            <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>{movie.genre}</p>
            <p style={{ margin: "4px 0", fontWeight: "bold", color: "#007bff", fontSize: "16px" }}>₹{movie.price}</p>
            <Link to={`/movie/${movie.id}`}>
              <button style={{ 
                backgroundColor: "#007bff", 
                color: "white", 
                border: "none", 
                padding: "8px 16px", 
                borderRadius: "4px", 
                cursor: "pointer", 
                width: "100%",
                marginTop: "8px"
              }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;