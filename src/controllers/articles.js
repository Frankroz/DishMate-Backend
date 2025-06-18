const fs = require("fs").promises;
const path = require("path");

const getAllArticles = async () => {
  try {
    const filePath = path.join(__dirname, "../data/articles.json");

    const data = await fs.readFile(filePath, "utf8");

    const articles = JSON.parse(data);

    return articles;
  } catch (error) {
    console.error("Error reading or parsing articles.json:", error);
    return [];
  }
};

const getArticleDetails = async (id) => {
  try {
    const filePath = path.join(__dirname, "../data/articles.json");

    const data = await fs.readFile(filePath, "utf8");

    const articles = JSON.parse(data);

    const articleDetails = articles.filter((art) => art.id === parseInt(id));

    return articleDetails;
  } catch (error) {
    console.error("Error reading or parsing articles.json:", error);
    return [];
  }
};

module.exports = { getAllArticles, getArticleDetails };
