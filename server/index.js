const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors')

app.use(cors());
app.use(express.json());

const port = 3001;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  const { name, age, country, position, salary } = req.body;

  db.query(
    "INSERT INTO employees (name, age, country, position, salary) VALUES(?,?,?,?,?)",
    [name, age, country, position, salary],
    (err) => {
      if (err) console.log(err);
      else res.send("Values Inserted");
    }
  );
});

app.get("/employees",(req,res)=> {
    db.query("SELECT * FROM employees",(err,result) => {
        if(err) console.log(err);
        else{
            res.send(result);
        }
    })
});

app.listen(port, () => {
  console.log("Server running on :" + port);
});
