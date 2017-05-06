var express = require('express');
var db = require("../models");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
// module.exports = function(app){

router.get("/", function(req, res) {
  db.Burgers.findAll()
  .then(function(data) { 
    console.log(data);              
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    return res.render("index", hbsObject);
  });
});

router.post("/create", function(req, res) {
  console.log(req.body.burger_name);
  db.Burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(data) {
    // console.log("DATA: " + data);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burgers.update({
    devoured: req.body.devoured
  },
  {
    where:{id:req.params.id}
  }).then(function(data) {
    res.redirect("/");
  });
});
// };

module.exports = router;