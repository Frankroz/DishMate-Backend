const { Router } = require("express");
const {
  getAllRecipes,
  getRecipeDetails,
} = require("../../controllers/recipes");

const router = Router();

router.get("/recipes", async (req, res) => {
  const destinations = await getAllRecipes();

  res.json(destinations);
});

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  const recipe = await getRecipeDetails(id);

  console.log(parseInt(recipe.idMeal) !== 0);

  if (parseInt(recipe.idMeal) !== 0) {
    return res.json(recipe);
  }

  return res.sendStatus(404);
});

module.exports = router;
