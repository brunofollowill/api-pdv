const { Router } = require("express");
const router = Router();

const {
  getDatas,
  getData,
  postData,
  patchData,
  deleteData,
} = require("./controlls");

router.get("/", getDatas);
router.get("/:id", getData);
router.post("/", postData);
router.patch("/:id", patchData);
router.delete("/:id", deleteData);

module.exports = router;
