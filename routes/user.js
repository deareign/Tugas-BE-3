const express = require('express');
const router = express.Router();

const { 
  getAllUser, getUserById, postUser, loginHandler, deleteUser, getUserByToken,

} = require('../controller/user');

//GET ALL USER (ENDPOINT 1)
router.get("/users/fetch-all", getAllUser);

//GET User By ID
router.get("/users/:userId", getUserById);

//Register new User
router.post("/users/register", postUser);

//Login user
router.post("/users/login", loginHandler);

//DELETE /users/:userId
router.delete("/users/:userId", deleteUser);

//GET USER DATA BY TOKEN
router.get("/users/fetch-by-token", getUserByToken);

module.exports = router;