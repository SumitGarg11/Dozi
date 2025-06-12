import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTasks from "./pages/Admin/CreateTasks";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import MyTask from "./pages/User/MyTask";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
            <Route path="/admin/createtask" element={<CreateTasks />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>
          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTask />} />
            <Route
              path="/user/tasks-details/:id"
              element={<ViewTaskDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
