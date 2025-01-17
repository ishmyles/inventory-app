import {
  getAllGames,
  getGame,
  getAllDevelopers,
  createGame,
  getAllGenres,
  updateGame,
  deleteGame,
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
  res.render("gameForm", {
    action: "Add",
    actionLink: "/games/new",
    devs: developersList,
    genres: genresList,
  });
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

export const gameUpdateGet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const selectedGame = await getGame(id);
  const developersList = await getAllDevelopers();
  const genresList = await getAllGenres();

  res.render("gameForm", {
    action: "Update",
    actionLink: "/games/" + id + "/update",
    devs: developersList,
    genres: genresList,
    game: selectedGame,
  });
});

export const gameUpdatePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedGameData = {
    id: id,
    ...req.body,
    genre: [...req.body.genre],
  };
  await updateGame(updatedGameData);

  res.redirect("/games/" + id);
});

export const gameDeletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await deleteGame(id);

  res.redirect("/games");
});
