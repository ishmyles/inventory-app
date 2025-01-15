import { Router } from "express";
import {
  getGames,
  createGameGet,
  createGamePost,
  gameInfoGet,
} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.get("/", getGames);

gamesRouter.get("/new", createGameGet);

gamesRouter.post("/new", createGamePost);

gamesRouter.get("/:id", gameInfoGet);

export default gamesRouter;
