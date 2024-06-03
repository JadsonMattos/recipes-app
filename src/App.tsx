import { Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Meals from './Pages/Meals';
import Drinks from './Pages/Drinks';
import FavoriteRecipes from './Pages/Favorite-Recipes';
import Profile from './Pages/Profile';
import RecipeDetails from './componentes/RecipeDetails';
import InProgress from './Pages/In-Progress';
import DoneRecipesPege from './Pages/Done-Recipes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/meals" element={ <Meals /> } />
      <Route path="/drinks" element={ <Drinks /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
      <Route path="/done-recipes" element={ <DoneRecipesPege /> } />
      <Route
        path="/meals/:idDaReceita"
        element={ <RecipeDetails title="Meals" /> }
      />
      <Route
        path="/drinks/:idDaReceita"
        element={ <RecipeDetails title="Drinks" /> }
      />
      <Route
        path="/meals/:idDaReceita/in-progress"
        element={ <InProgress /> }
      />
      <Route
        path="/drinks/:idDaReceita/in-progress"
        element={ <InProgress /> }
      />
    </Routes>
  );
}

export default App;
