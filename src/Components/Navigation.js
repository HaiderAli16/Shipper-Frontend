import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ backgroundColor: "#1a1a1a", padding: "10px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
      <ul style={{ display: "flex", justifyContent: "center", listStyleType: "none", margin: 0 }}>
      
     
        <li style={{ marginRight: "20px" }}>
          <Link to="/random-quote" style={{ textDecoration: "none", color: "#fff", fontSize: "20px", fontWeight: "bold" }}>Random Quote</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/get-shippers" style={{ textDecoration: "none", color: "#fff", fontSize: "20px", fontWeight: "bold" }}>Get Shippers</Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/get-30-quotes" style={{ textDecoration: "none", color: "#fff", fontSize: "20px", fontWeight: "bold" }}>Get 30 Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
