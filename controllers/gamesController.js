import { getAllGames, getGame } from "../db/queries.js";

export const getGames = async (req, res) => {
  const gamesList = await getAllGames();
  res.render("listPage", { title: "Games", games: gamesList });
};

export const createGameGet = (req, res) => res.send("CREATE GAME FORM");

export const createGamePost = (req, res) =>
  res.send("[POST]: New game created");

export const gameInfoGet = async (req, res) => {
  const selectedGame = await getGame(req.params.id);
  console.log(selectedGame);
  res.render("gameInfo", { game: selectedGame });
};
