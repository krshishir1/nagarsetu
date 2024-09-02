const express = require("express")
const router = express.Router()

const adminController = require("../controllers/city")

router.post("/register", adminController.registerCity)
router.post("/login", adminController.loginAdmin)
router.post("/dept/register", adminController.registerDepartment)
router.delete("/dept/:city_id", adminController.deleteDepartment)
router.get("/:id", adminController.getCity)

export default router