import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ textAlign: "center", margin: "1rem" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/form">Formulário</Link> |{" "}
      <Link to="/about">Sobre</Link>
    </nav>
  );
}