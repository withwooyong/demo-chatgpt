var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource samples");
});

router.get("/get/demo/:searchword", function (req, res) {
  console.log("--------------- 1");
  var params = req.params;
  console.log(params.searchword);

  res.status(200).json({
    message: "call get api demo " + params.searchword,
  });
});

router.post("/post/demo", function (req, res) {
  res.status(200).json({
    message: "call post api demo",
  });
});

module.exports = router;
