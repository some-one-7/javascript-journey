import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <h2>{recipe.title}</h2>

      <p>{recipe.description}</p>

      <Link to={`/recipe/${recipe.id}`}>
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;