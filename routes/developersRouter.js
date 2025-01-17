import { Router } from "express";
import { validateDeveloperForm } from "../utils/formValidation.js";
import {
  getDevelopers,
  createDevelopersGet,
  createDevelopersPost,
  developerInfoGet,
  developerUpdateGet,
  developerUpdatePost,
  developerDeletePost,
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

developersRouter.post("/:id/delete", developerDeletePost);

export default developersRouter;
