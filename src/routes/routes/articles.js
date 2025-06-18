const { Router } = require("express");
const {
  getAllArticles,
  getArticleDetails,
} = require("../../controllers/articles");

const router = Router();

router.get("/articles", async (req, res) => {
  const destinations = await getAllArticles();

  res.json(destinations);
});

router.get("/articles/:id", async (req, res) => {
  const { id } = req.params;

  const recipe = await getArticleDetails(id);

  if (recipe.id > 0) {
    return res.sendStatus(404);
  }

  return res.json(recipe);
});

module.exports = router;
