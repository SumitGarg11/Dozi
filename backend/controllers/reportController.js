const Task = require("../model/Task");
const User = require("../model/User");

const excelJS = require("exceljs");

const exportTasksReport = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "name email");
    const worksbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("Tasks Report");
    worksheet.columns = [
      { header: "Task ID", key: "_id", width: 25 },
      { header: "Title", key: "title", width: 30 },
      { header: "Description", key: "description", width: 50 },
      { header: "Priority", key: "priority", width: 15 },
      { header: "Status", key: "status", width: 20 },
      { header: "Due Date", key: "dueDate", width: 20 },
      { header: "Assigned To", key: "assignedTo", width: 30 },
    ];
    tasks.forEach((task) => {
      const assignedTo = task.assignedTo
        .map((user) => `${user.name} ($(user.email)) `)
        .join(", ");
      worksheet.addRow({
        _id: task._id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate.toISOString().split("T")[0],
        assignedTo: assignedTo || "Unassigned",
      });
    });
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Dispostion",
      'attachment; filename="tasks_report.xlsx"'
    );
    return workbook.xlsx.write(res).then(() => {
      res.end();
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: " Error exporting tasks", error: error.message });
  }
};
const exportUsersReport = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(500)
      .json({ message: " Error exporting tasks", error: error.message });
  }
};
module.exports = { exportTasksReport, exportUsersReport };
