const connection = require("../config/database");
const getAllUsers = async () => {
  let [result, fields] = await connection.query("select * from Users");
  return result;
};
const getUser = async (userId) => {
  let [result, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  let user = result && result.length > 0 ? result[0] : [];
  return user;
};
const updateUserById = async (email, name, city, userId) => {
  try {
    let [result, fields] = await connection.query(
      `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
      [email, name, city, userId]
    );

    // Kiểm tra xem có hàng nào bị ảnh hưởng hay không
    if (result.affectedRows === 0) {
      throw new Error("No user found with the provided ID");
    }

    // Trả về kết quả của truy vấn
    return result;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Ném lỗi để xử lý ở tầng trên
  }
};
const deleteUser = async (userId) => {
  await connection.query(`delete from Users where id = ?`, [userId]);
};
module.exports = {
  getAllUsers,
  getUser,
  updateUserById,
  deleteUser,
};
