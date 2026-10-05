const express = require("express");
const {
  createUser,
  loginUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getProfilePicture,
} = require("../controllers/userController");
const upload = require("../middlewares/multer");
const { verifyToken, verifyRole } = require("../middlewares/verify");
const router = express.Router();

router.post("/", upload.single("dp"), createUser);
router.post("/login", loginUser);
router.get("/profile-picture/:id", getProfilePicture);
router.get("/user/:id", getUser);
router.get("/", getUsers);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
