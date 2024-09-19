const connection = require("../config/database");
const {
  getAllUsers,
  getUser,
  updateUserById,
  deleteUser,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  res.render("home.ejs", { listUsers: result });
};
const getABC = (req, res) => {
  res.send("check!");
};
const getHoang = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUser = (req, res) => {
  res.render("create_user.ejs");
};
const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;

  // connection.query(
  //   `insert into Users (email,name,city) values(?,?,?) `,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(result);
  //     res.send("create users succesful");
  //   }
  // );
  let [result, fields] = await connection.query(
    `insert into Users (email,name,city) values(?,?,?) `,
    [email, name, city]
  );
  res.redirect("/");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUser(userId);
  res.render("editUser.ejs", { userEdit: user });
};
const putUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const delPage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUser(userId);
  res.render("delete.ejs", { userDelete: user });
};
const delUser = async (req, res) => {
  let userId = req.body.userId;
  await deleteUser(userId);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getHoang,
  postCreateUser,
  getCreateUser,
  getUpdatePage,
  putUpdateUser,
  delPage,
  delUser,
};
