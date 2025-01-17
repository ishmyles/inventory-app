import { Router } from "express";
import { validateDeveloperForm } from "../utils/formValidation.js";
import {
  getDevelopers,
  createDevelopersGet,
  createDevelopersPost,
  developerInfoGet,
} from "../controllers/developersController.js";

const developersRouter = Router();

developersRouter.get("/", getDevelopers);

developersRouter.get("/new", createDevelopersGet);

developersRouter.post("/new", validateDeveloperForm, createDevelopersPost);

developersRouter.get("/:id", developerInfoGet);

export default developersRouter;
