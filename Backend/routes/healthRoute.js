const express = require("express");
const { getHealthController } = require("../controllers/healthController");

const router = express.Router();

router.get("/", getHealthController);

module.exports = router;
