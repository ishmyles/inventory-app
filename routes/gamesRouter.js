import { Router } from "express";
import { validateGameForm } from "../utils/formValidation.js";
import {
  getGames,
  createGameGet,
  createGamePost,
  gameInfoGet,
  gameUpdateGet,
  gameUpdatePost,
  gameDeletePost,
} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.get("/", getGames);

gamesRouter.get("/new", createGameGet);

gamesRouter.post("/new", validateGameForm, createGamePost);

gamesRouter.get("/:id", gameInfoGet);

gamesRouter.get("/:id/update", gameUpdateGet);

gamesRouter.post("/:id/update", validateGameForm, gameUpdatePost);

gamesRouter.post("/:id/delete", gameDeletePost);

export default gamesRouter;
