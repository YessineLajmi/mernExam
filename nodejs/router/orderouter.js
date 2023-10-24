const { Router } = require("express");
const {
  getAllorders,
  createorder,
  update,
  remove,
  getallundeliveredorders,
  getalldeliveredorders,
  isAble,
} = require("../controller/orderController");

const router = Router();

router.get("/", getAllorders);
router.get("/undelivered", getallundeliveredorders);
router.get("/delivered", getalldeliveredorders);
router.get("/able", isAble);
router.post("/", createorder);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
