export const getAllGenres = (req, res) => res.send("SHOW ALL GENRES");

export const createGenresGet = (req, res) => res.send("CREATE GENRE FORM");

export const createGenresPost = (req, res) =>
  res.send("[POST]: New GENRE created");

export const genreInfoGet = (req, res) => res.send("GENRE INFO AT ID: ");
