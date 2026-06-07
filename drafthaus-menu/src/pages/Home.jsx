

import { useNavigate } from "react-router-dom";
import barImg from "../images/beer.jpg";
import kitchenImg from "../images/food.jpg";

export default function Home() {
  const navigate = useNavigate();

  const goToMenu = (section) => {
    navigate("/menu", { state: { section } });
  };

  return (
    <div className="home">
      <div className="overlay">
        <h1>Drafthaus</h1>
        <p>Select your experience</p>

        <div className="card-buttons">
          <div className="choice-card" onClick={() => goToMenu("bar")}>
            <img src={barImg} alt="Bar" />
            <div className="label">BAR</div>
          </div>

          <div className="choice-card" onClick={() => goToMenu("kitchen")}>
            <img src={kitchenImg} alt="Kitchen" />
            <div className="label">KITCHEN</div>
          </div>
        </div>
      </div>
    </div>
  );
}