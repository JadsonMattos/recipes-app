import { useSelector } from 'react-redux';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import Recipes from '../componentes/Recipes';

function Meals() {
  const searchResults = useSelector((state: any) => state.searchReducer.data);
  return (
    <div>
      <Header title="Meals" search />
      <h1>Meals Page</h1>
      <Recipes title="Meals" data={ searchResults } />
      <Footer />
    </div>
  );
}

export default Meals;
