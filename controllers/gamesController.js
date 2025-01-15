export const getAllGames = (req, res) => res.send("SHOW ALL GAMES");

export const createGameGet = (req, res) => res.send("CREATE GAME FORM");

export const createGamePost = (req, res) =>
  res.send("[POST]: New game created");

export const gameInfoGet = (req, res) => res.send("GAME INFO AT ID: ");
