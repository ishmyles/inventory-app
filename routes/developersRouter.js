import { Router } from "express";
import {
  getAllDevelopers,
  createDevelopersGet,
  createDevelopersPost,
  developerInfoGet,
} from "../controllers/developersController.js";

const developersRouter = Router();

developersRouter.get("/", getAllDevelopers);

developersRouter.get("/new", createDevelopersGet);

developersRouter.post("/new", createDevelopersPost);

developersRouter.get("/:id", developerInfoGet);

export default developersRouter;
