import { Router } from "express";
import {
  getAllGenres,
  createGenresGet,
  createGenresPost,
  genreInfoGet,
} from "../controllers/genresController.js";

const genresRouter = Router();

genresRouter.get("/", getAllGenres);

genresRouter.get("/new", createGenresGet);

genresRouter.post("/new", createGenresPost);

genresRouter.get("/:id", genreInfoGet);

export default genresRouter;
