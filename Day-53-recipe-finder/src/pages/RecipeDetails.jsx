import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>

      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;