const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoang,
  postCreateUser,
  getCreateUser,
  getUpdatePage,
  putUpdateUser,
  delUser,
  delPage,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoang", getHoang);

router.get("/create", getCreateUser);

router.get("/update-page/:id", getUpdatePage);

router.get("/delete-user/:id", delPage);
router.post("/delete-user", delUser);

router.post("/create-user", postCreateUser);

router.post("/update-user", putUpdateUser);

module.exports = router;
