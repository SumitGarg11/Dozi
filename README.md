# 🚀 Dozi | Task Manager

A robust and scalable Task Management System built with **MERN stack**  
> **MongoDB, Express, React, Node.js, JWT, Bcrypt, ExcelJS, Recharts**

---

## 📌 **Project Overview**

**Dozi** is a full-stack task manager that supports **Admin** and **User** roles with secure authentication and role-based access. It helps teams organize, track, and manage tasks effectively with modern dashboards and dynamic data visualization.

**Key Features:**
- 🔐 **Secure Login & Role-based Access** using **JWT** and **Bcrypt**
- 🗂️ **Admin Panel:**  
  - Create, assign, update, and delete tasks  
  - Manage team members  
  - Visualize tasks with Pie and Bar Charts (**Recharts**)  
  - Export task and user reports to **Excel** (**ExcelJS**)
- ✅ **User Dashboard:**  
  - View assigned tasks  
  - Update task status (**Pending → In Progress → Completed**)  
  - Track tasks by priority (**Low / Medium / High**)  
  - Easy-to-read charts for quick insights
- 📊 **Data Visualization:**  
  - Pie Charts for status distribution  
  - Bar Charts for priority levels

---

## ⚙️ **Tech Stack**

| Tech | Description |
|------|--------------|
| **Frontend** | React, Tailwind CSS, Recharts |
| **Backend** | Node.js, Express |
| **Database** | MongoDB |
| **Auth** | JWT, Bcrypt |
| **Reports** | ExcelJS |

---

## Login Page
![alt text](<Screenshot from 2025-06-23 11-43-35.png>)
## Sign UP Page
![alt text](<Screenshot from 2025-06-23 11-44-25.png>)
## user dashboard
![alt text](<Screenshot from 2025-06-23 11-40-18.png>)
![alt text](<Screenshot from 2025-06-23 11-41-29.png>)
![alt text](<Screenshot from 2025-06-23 11-42-07.png>)
![alt text](<Screenshot from 2025-06-23 11-42-36.png>)
![alt text](<Screenshot from 2025-06-23 11-43-06.png>)

## Admin Create Task 
![alt text](<Screenshot from 2025-06-23 11-45-47.png>)

## 🚀 **Live Preview**

```bash
Frontend: http://localhost:5173  
Backend: http://localhost:8000
```
##  📂 Project Structure
```
Dozi/
 ├── backend/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── utils/
 │    ├── server.js
 │    └── ...
 ├── frontend/
 │    ├── src/
 │    ├── public/
 │    ├── vite.config.js
 │    └── ...
 ├── .env
 ├── package.json
 ├── README.md
 └── ...

```

## 🛠️ Setup Instructions

#### 1️⃣ Clone the Repository
```
git clone https://github.com/SumitGarg11/Dozi.git
cd Dozi
```
#### 2️⃣ Install Dependencies
- Frontend:
```
cd frontend
npm install

```
- Backend:
```
cd ../backend
npm install
```
#### 3️⃣ Create .env in backend root
- Create a .env file and add your configuration:
```
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
ADMIN_INVITE_TOKEN=YOUR_ADMIN_INVITE_TOKEN
PORT=8000
```
#### 4️⃣ Run MongoDB
- Ensure MongoDB is running locally or use a MongoDB Atlas cluster.

#### 5️⃣ Run the Applications
- Start Backend:

```
cd backend
npm run dev
```
- Runs on: http://localhost:8000
  
- Start Frontend:
```
cd frontend
npm run dev
```
## CRUD API Endpoints
```
| Method   | Endpoint              | Description                 |
| -------- | --------------------- | --------------------------- |
| `POST`   | `/api/auth/register`  | Register a new user         |
| `POST`   | `/api/auth/login`     | Login user                  |
| `GET`    | `/api/tasks`          | Get all tasks               |
| `GET`    | `/api/tasks/:id`      | Get task by ID              |
| `POST`   | `/api/tasks`          | Create a task (Admin only)  |
| `PUT`    | `/api/tasks/:id`      | Update a task               |
| `DELETE` | `/api/tasks/:id`      | Delete a task               |
| `GET`    | `/api/users`          | Get all users (Admin only)  |
| `POST`   | `/api/reports/export` | Export tasks/users to Excel |

```

## Charts
- Pie Charts: Task distribution (Completed / In Progress / Pending)
- Bar Charts: Task priority breakdown (Low, Medium, High)
