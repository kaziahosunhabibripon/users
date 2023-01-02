const express = require("express");

const router = require("express").Router();

const users = require("../models/users.model");

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

// all route crud operations
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
