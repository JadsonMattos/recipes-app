import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Profile() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email) setEmail(user.email);
  }, []);

  const handleDoneRecipes = () => {
    navigate('/done-recipes');
  };

  const handleFavoriteRecipes = () => {
    navigate('/favorite-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div>
      <Header title="Profile" />
      <div>
        <p
          data-testid="profile-email"
        >
          Email:
          {email}
        </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ handleDoneRecipes }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteRecipes }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
