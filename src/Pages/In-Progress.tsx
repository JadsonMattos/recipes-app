import Header from '../componentes/Header';
import RecipeInProgress from '../componentes/RecipeInProgress';

function InProgress() {
  return (
    <div>
      <Header title="In progress" />
      <h1>In progress page</h1>
      <RecipeInProgress title="Meals" />
      <RecipeInProgress title="Drinks" />
    </div>
  );
}

export default InProgress;
