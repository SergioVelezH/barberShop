import { Link } from "react-router-dom"
import "./landing.css";

function Landing() {
  return (
    <div className="container-div">
      <span className="barber-title">BARBERIA SUBOF-SHOP</span>
      <div className="button-container">
        <Link to="/agenda">
        <button>Quiero un turno</button>
        </Link>
        <a href="https://www.instagram.com/ssergiovelez_/">
          <button>Instagram</button>
        </a>
        <a href="https://wa.link/49qto7">
          <button>WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default Landing;
