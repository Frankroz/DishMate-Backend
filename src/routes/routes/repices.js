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

  const article = await getRecipeDetails(id);

  if (article.id > 0) {
    return res.sendStatus(404);
  }

  return res.json(article);
});

module.exports = router;
