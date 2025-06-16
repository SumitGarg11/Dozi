const Task = require("../model/Task");
const getTasks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getTaskById = async (req, res) => {};
const createTask = async (req, res) => {};
const updateTask = async (req, res) => {};
const deleteTask = async (req, res) => {};
const updateTaskStatus = async (req, res) => {};
const updateTaskChecklist = async (req, res) => {};
const getDashboardData = async (req, res) => {};
const getUserDashboardData = async (req, res) => {};
module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
