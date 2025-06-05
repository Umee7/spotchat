import { Router } from "express";
import { getStat } from "../controller/stat.controller.js"

const router = Router();

router.get("/", getStat);

export default router;