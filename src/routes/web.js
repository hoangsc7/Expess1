const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoang,
  postCreateUser,
  getCreateUser,
  getUpdatePage,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoang", getHoang);

router.get("/create", getCreateUser);

router.post("/create-user", postCreateUser);

router.get("/update-page/:id", getUpdatePage);

module.exports = router;
