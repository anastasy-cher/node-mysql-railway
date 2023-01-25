const { json } = require('express');
var express = require('express');
const { pool } = require('../db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', async function(req, res, next) {
  const result = await pool.promise().query('SELECT "HELLO WORLD" as RESULT')
  console.log(result)
  console.log(result[0])
  res.json(result[0])
  res.render("ping");
});

module.exports = router;
