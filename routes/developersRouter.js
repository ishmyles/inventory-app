import { Router } from "express";
import { validateDeveloperForm } from "../utils/formValidation.js";
import {
  getDevelopers,
  createDevelopersGet,
  createDevelopersPost,
  developerInfoGet,
  developerUpdateGet,
  developerUpdatePost,
} from "../controllers/developersController.js";

const developersRouter = Router();

developersRouter.get("/", getDevelopers);

developersRouter.get("/new", createDevelopersGet);

developersRouter.post("/new", validateDeveloperForm, createDevelopersPost);

developersRouter.get("/:id", developerInfoGet);

developersRouter.get("/:id/update", developerUpdateGet);

developersRouter.post(
  "/:id/update",
  validateDeveloperForm,
  developerUpdatePost
);

export default developersRouter;
