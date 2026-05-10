import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <div>
      <h1>Recipe Finder</h1>

      <div className="container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;