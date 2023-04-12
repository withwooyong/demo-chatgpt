var express = require("express");
var router = express.Router();

// Get example page
router.get("/", function (req, res, next) {
  res.send("example");
});

module.exports = router;

router.get("/example/api/get/nodejs-api", function (req, res) {
  res.status(200).json({
    message: "hello get api nodejs-api",
  });
});

router.post("/example/api/post/nodejs-api", function (req, res) {
  res.status(200).json({
    message: "hello post api nodejs-api",
  });
});
