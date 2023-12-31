"use strict";
const express = require('express')
const router = express.Router();
const routeController = require("../controllers/pageController");

// router.get("/", routeController.renderHome);
// router.get("/home", routeController.renderHome);
// router.get("/about", routeController.renderAbout);

router.get("/getData", routeController.getData);

module.exports = {
    routes: router
}