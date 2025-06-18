const { Router } = require("express");
const express = require("express");
const path = require("path");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const articles = require("./routes/articles");
const recipes = require("./routes/repices");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", express.static(path.join(__dirname, "../public")));
router.use("/", articles);
router.use("/", recipes);

module.exports = router;
