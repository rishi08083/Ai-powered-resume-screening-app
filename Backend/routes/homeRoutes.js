const express = require("express");
const { getHomeController } = require("../controllers/defaultControllers/homeController");
const { getHealthController } = require('./../controllers/healthController')

const router = express.Router();

router.get("/", getHomeController);

router.get('/health',getHealthController)

module.exports = router;
