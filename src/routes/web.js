const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoang,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoang", getHoang);

module.exports = router;
