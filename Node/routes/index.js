var express = require('express');
var router = express.Router();
const details = [
  {
    id: 1,
    name: "Dan",
    value: 150
  },
  {
    id: 2,
    name: "Peter",
    value: 300
  },
  {
    id: 3,
    name: "Mark",
    value: 400
  },
  {
    id: 4,
    name: "Victor",
    value: 600
  }
]

const SumOfValues = (data) => {
  const sum = data.map((data) => { return data.value })
    .reduce((accumulator, curVal) => { return accumulator += curVal })
  return sum;
}

/* GET home page. */
router.get('/', function (req, res, next) {
  const result = SumOfValues(details);
  if (!result) {
    return res.render('index', { title: "ERROR" });
  }
  else { res.render('index', { title: result }); }

});

module.exports = router;
