import { Router } from "express";
import { validateGenreForm } from "../utils/formValidation.js";
import {
  getGenres,
  createGenresGet,
  createGenresPost,
  genreInfoGet,
  genreUpdateGet,
  genreUpdatePost,
} from "../controllers/genresController.js";

const genresRouter = Router();

genresRouter.get("/", getGenres);

genresRouter.get("/new", createGenresGet);

genresRouter.post("/new", validateGenreForm, createGenresPost);

genresRouter.get("/:id", genreInfoGet);

genresRouter.get("/:id/update", genreUpdateGet);

genresRouter.post("/:id/update", validateGenreForm, genreUpdatePost);

export default genresRouter;
