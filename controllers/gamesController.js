import {
  getAllGames,
  getGame,
  getAllDevelopers,
  createGame,
  getAllGenres,
} from "../db/queries.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

export const getGames = asyncHandler(async (req, res) => {
  const gamesList = await getAllGames();
  res.render("listPage", { title: "Games", games: gamesList });
});

export const createGameGet = asyncHandler(async (req, res) => {
  const developersList = await getAllDevelopers();
  const genresList = await getAllGenres();
  res.render("gameForm", { devs: developersList, genres: genresList });
});

export const createGamePost = asyncHandler(async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const developersList = await getAllDevelopers();
    const genresList = await getAllGenres();

    res.render("gameForm", {
      devs: developersList,
      genres: genresList,
      formErr: result.array(),
    });
  } else {
    await createGame(req.body);
    res.redirect("/games");
  }
});

export const gameInfoGet = asyncHandler(async (req, res) => {
  const selectedGame = await getGame(req.params.id);
  res.render("gameInfo", { game: selectedGame });
});
