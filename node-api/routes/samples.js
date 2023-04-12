var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource samples");
});

router.get("/get/demo", function (req, res) {
  req.json();
  res.status(200).json({
    message: "call get api demo",
  });
});

router.post("/post/demo", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
