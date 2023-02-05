import express from "express";
import authRoutes from "./auth.route";
import companyRoutes from "./company.route";
import InventoryRoutes from "./inventory.route";

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));
router.get("/pdf", (req, res) => res.download("./src/api/public/output.pdf"));

/**
 * GET v1/docs
 */
router.use("/auth", authRoutes);

// Application routes
router.use("/companies", companyRoutes);
router.use("/inventories", InventoryRoutes);

module.exports = router;
