import { Router } from "express";
import {
  getDevelopers,
  createDevelopersGet,
  createDevelopersPost,
  developerInfoGet,
} from "../controllers/developersController.js";

const developersRouter = Router();

developersRouter.get("/", getDevelopers);

developersRouter.get("/new", createDevelopersGet);

developersRouter.post("/new", createDevelopersPost);

developersRouter.get("/:id", developerInfoGet);

export default developersRouter;
