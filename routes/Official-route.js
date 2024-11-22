import { Router } from "express";
import {
  createOfficial,
  getAllOfficials,
  updateOfficial,
  deleteOfficial,
} from "../controllers/Official-controller.js";
const officialsRoutes = Router();

officialsRoutes.post("/", createOfficial);
officialsRoutes.get("/", getAllOfficials);
officialsRoutes.put("/:id", updateOfficial);
officialsRoutes.delete("/:id", deleteOfficial);

export default officialsRoutes;