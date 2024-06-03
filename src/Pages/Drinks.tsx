import { useSelector } from 'react-redux';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import Recipes from '../componentes/Recipes';

function Drinks() {
  const searchResults = useSelector((state: any) => state.searchReducer.data);
  return (
    <div>
      <Header title="Drinks" search />
      <h1>Drinks Page</h1>
      <Recipes title="Drinks" data={ searchResults } />
      <Footer />
    </div>
  );
}

export default Drinks;
