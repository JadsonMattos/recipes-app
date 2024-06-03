import { useNavigate } from 'react-router-dom';

type RecipeCardProps = {
  photo: string;
  name: string;
  id: string;
  title: string;
  index: number;
};

function RecipeCard({ photo, name, id, title, index }: RecipeCardProps) {
  const titulo = title.toLowerCase();
  const navigate = useNavigate();
  function detalhes() {
    navigate(`/${titulo}/${id}`);
  }
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <button
        onClick={ detalhes }
      >
        <h2 data-testid={ `${index}-card-name` }>{ name }</h2>
        <img
          src={ photo }
          alt="imgRecipes"
          data-testid={ `${index}-card-img` }
          width="360px"
        />
      </button>
    </div>
  );
}

export default RecipeCard;
