import { getAllGenres, getGamesByGenre } from "../db/queries.js";

export const getGenres = async (req, res) => {
  const genresList = await getAllGenres();
  res.render("listPage", { title: "Genres", genres: genresList });
};

export const createGenresGet = (req, res) => res.send("CREATE GENRE FORM");

export const createGenresPost = (req, res) =>
  res.send("[POST]: New GENRE created");

export const genreInfoGet = async (req, res) => {
  const filteredList = await getGamesByGenre(req.params.id);

  res.render("filteredGames", {
    title: "Genres",
    subject: filteredList.type,
    games: filteredList.games,
  });
};
