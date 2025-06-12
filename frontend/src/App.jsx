import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTasks from "./pages/Admin/CreateTasks";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path= "/signup" element={<SignUp/>} />
        {/* Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}  >
           <Route path="/admin/dashboard" element={<Dashboard/>} />
           <Route path="/admin/tasks" element={<ManageTask/>} />
           <Route path="/admin/createtask" element={<CreateTasks/>} />
        </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
