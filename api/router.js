const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.send({ status: "success" });
});

module.exports = router;
