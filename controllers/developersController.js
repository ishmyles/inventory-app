import { getAllDevelopers, getGamesByDeveloper } from "../db/queries.js";

export const getDevelopers = async (req, res) => {
  const developersList = await getAllDevelopers();
  res.render("listPage", { title: "Developers", developers: developersList });
};

export const createDevelopersGet = (req, res) =>
  res.send("CREATE DEVELOPER FORM");

export const createDevelopersPost = (req, res) =>
  res.send("[POST]: New DEVELOPER created");

export const developerInfoGet = async (req, res) => {
  const filteredList = await getGamesByDeveloper(req.params.id);

  res.render("filteredGames", {
    title: "Developers",
    subject: filteredList.companyname,
    games: filteredList.games,
  });
};
