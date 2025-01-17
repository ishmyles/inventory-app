import { Router } from "express";
import { validateGameForm } from "../utils/formValidation.js";
import {
  getGames,
  createGameGet,
  createGamePost,
  gameInfoGet,
} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.get("/", getGames);

gamesRouter.get("/new", createGameGet);

gamesRouter.post("/new", validateGameForm, createGamePost);

gamesRouter.get("/:id", gameInfoGet);

export default gamesRouter;
