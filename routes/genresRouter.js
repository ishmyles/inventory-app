import { Router } from "express";
import {
  getGenres,
  createGenresGet,
  createGenresPost,
  genreInfoGet,
} from "../controllers/genresController.js";

const genresRouter = Router();

genresRouter.get("/", getGenres);

genresRouter.get("/new", createGenresGet);

genresRouter.post("/new", createGenresPost);

genresRouter.get("/:id", genreInfoGet);

export default genresRouter;
