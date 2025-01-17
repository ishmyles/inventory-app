import {
  getAllGenres,
  getGamesByGenre,
  createGenre,
  getGenreById,
  updateGenre,
} from "../db/queries.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

export const getGenres = asyncHandler(async (req, res) => {
  const genresList = await getAllGenres();
  res.render("listPage", { title: "Genres", genres: genresList });
});

export const createGenresGet = (req, res) =>
  res.render("genreForm", {
    action: "Add",
    actionLink: "/genres/new",
  });

export const createGenresPost = asyncHandler(async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errMsg = result.array();
    res.render("genreForm", { err: errMsg[0].msg });
  } else {
    await createGenre(req.body);
    res.redirect("/genres");
  }
});

export const genreInfoGet = asyncHandler(async (req, res) => {
  const filteredList = await getGamesByGenre(req.params.id);

  res.render("filteredGames", {
    title: "Genres",
    subject: filteredList.type,
    games: filteredList.games,
  });
});

export const genreUpdateGet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const genreInfo = await getGenreById(id);

  res.render("genreForm", {
    action: "Update",
    actionLink: "/genres/" + id + "/update",
    genre: genreInfo,
  });
});

export const genreUpdatePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedGenreData = { id: id, ...req.body };
  await updateGenre(updatedGenreData);
  res.redirect("/genres/" + id);
});
