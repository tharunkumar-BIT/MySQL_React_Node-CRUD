
# 🛠️ MySQL + React + Node.js CRUD App

A full-stack CRUD application demonstrating the use of **MySQL** with a **React** frontend and **Node.js + Express** backend. Perform basic database operations through a user-friendly interface.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-black?logo=express)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)

---

## ✨ Features

- 📄 Create, Read, Update, Delete operations on user records
- 🔄 Real-time UI updates after each DB operation
- ⚡ Clean API architecture with async operations

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Languages**: JavaScript, SQL
- **API**: RESTful

---

## 📁 Project Structure

```
MySQL_React_Node-CRUD/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── App.jsx
├── server/             # Node.js + Express backend
│   ├── db/             # MySQL DB config
│   ├── routes/
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MySQL server (local or remote)

### Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/tharunkumar-BIT/MySQL_React_Node-CRUD.git
   cd MySQL_React_Node-CRUD
   ```

2. **Set up MySQL database:**

   - Create a new database
   - Run the provided SQL script (if any) to create tables

3. **Configure DB credentials in backend:**

   Open `server/db/config.js` and update your MySQL username, password, and database name.

4. **Install backend dependencies:**

   ```bash
   cd server
   npm install
   ```

5. **Install frontend dependencies:**

   ```bash
   cd ../client
   npm install
   ```

6. **Start the backend server:**

   ```bash
   cd ../server
   npm start
   ```

7. **Start the frontend app:**

   ```bash
   cd ../client
   npm start
   ```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the project and submit a pull request with your improvements.
