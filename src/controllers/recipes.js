const fs = require('fs').promises;
const path = require('path');

const getAllRecipes = async () => {
  try {
    const filePath = path.join(__dirname, '../data/recipes.json');
    
    const data = await fs.readFile(filePath, 'utf8');
    
    const recipes = JSON.parse(data);
    
    return recipes;
  } catch (error) {
    console.error("Error reading or parsing recipes.json:", error);
    return [];
  }
}

const getRecipeDetails = async (id) => {
  try {
    const filePath = path.join(__dirname, "../data/recipes.json");

    const data = await fs.readFile(filePath, "utf8");

    const recipes = JSON.parse(data);

    const recipeDetails = recipes.filter((rec) => rec.idMeal === id);

    return recipeDetails;
  } catch (error) {
    console.error("Error reading or parsing recipes.json:", error);
    return [];
  }
};

module.exports = { getAllRecipes, getRecipeDetails };