import express from "express";
import * as controller from "../controllers/inventory.controller";

const router = express.Router();

router.route("/").get(controller.index);
router.route("/").post(controller.store);
router.route("/:id").get(controller.edit);
router.route("/:id").put(controller.update);
router.route("/:id").delete(controller.destroy);

module.exports = router;
