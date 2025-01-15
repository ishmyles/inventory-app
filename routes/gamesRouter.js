import { Router } from "express";
import {
  getAllGames,
  createGameGet,
  createGamePost,
  gameInfoGet,
} from "../controllers/gamesController.js";

const gamesRouter = Router();

gamesRouter.get("/", getAllGames);

gamesRouter.get("/new", createGameGet);

gamesRouter.post("/new", createGamePost);

gamesRouter.get("/:id", gameInfoGet);

export default gamesRouter;
