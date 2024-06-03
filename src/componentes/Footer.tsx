import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();
  function handleDrinksClick() {
    navigate('/drinks');
  }
  function handleMealsClick() {
    navigate('/meals');
  }
  return (
    <footer
      className="footer"
      data-testid="footer"
    >
      <button
        onClick={ handleDrinksClick }
      >
        <img
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
          src="src/images/drinkIcon.svg"
        />
      </button>
      <button
        onClick={ handleMealsClick }
      >
        <img
          alt="mealIcon"
          data-testid="meals-bottom-btn"
          src="src/images/mealIcon.svg"
        />
      </button>
    </footer>
  );
}

export default Footer;
