const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/forms", async (req, res) => {
  try {
    const { name, dept, age, dob } = req.body;
    const newforms = await pool.query(
      "INSERT INTO forms(fname,dept,age,dob) VALUES($1,$2,$3,$4) ",
      [name, dept, age, dob]
    );
    res.json(newforms);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/stu/:id", async (req, res) => {
  const id = req.params.id;
  const stuid = await pool.query("SELECT * FROM forms WHERE id=$1", [id]);
  res.send(stuid.rows);
});

app.get("/", async (req, res) => {
  try {
    const alldet = await pool.query("SELECT * FROM forms");
    res.json(alldet.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/forms/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dept, age, dob } = req.body;
    const changedept = await pool.query(
      "UPDATE forms SET fname=$1,dept= $2,age=$3, dob=$4 WHERE id=$5",
      [name, dept, age, dob, id]
    );
    res.json("dept was updated");
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/forms/:id", async (req, res) => {
  const { id } = req.params;
  const deleteforms = await pool.query("DELETE FROM forms WHERE id=$1", [id]);
  res.json("a row was deleted");
});

app.listen(9000, () => {
  console.log("server has been started at 9000");
});
