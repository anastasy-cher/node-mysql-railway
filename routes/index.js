const dotenv = require('dotenv')
dotenv.config()
const { json } = require('express');
const express = require('express');
const { pool } = require('../db.js');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows] = await pool.promise().query("SELECT * FROM users")
  res.json(rows)
});

router.get('/ping', async function(req, res, next) {
  const result = await pool.promise().query('SELECT * from users')
  console.log(result)
  // console.log(result[0])
  res.json(result)
  res.render("ping");
});

router.get('/create', async function(req, res, next) {
  const result = await pool.promise().query('INSERT INTO users(NAME) VALUES ("pusoc")')
  console.log(result)

  res.send("ping");
});

module.exports = router;
