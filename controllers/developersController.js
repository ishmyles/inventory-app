import {
  createDeveloper,
  getAllDevelopers,
  getGamesByDeveloper,
} from "../db/queries.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

export const getDevelopers = asyncHandler(async (req, res) => {
  const developersList = await getAllDevelopers();
  res.render("listPage", { title: "Developers", developers: developersList });
});

export const createDevelopersGet = (req, res) => res.render("developerForm");

export const createDevelopersPost = asyncHandler(async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errMsg = result.array();
    res.render("developerForm", { err: errMsg[0].msg });
  } else {
    await createDeveloper(req.body);
    res.redirect("/developers");
  }
});

export const developerInfoGet = asyncHandler(async (req, res) => {
  const filteredList = await getGamesByDeveloper(req.params.id);

  res.render("filteredGames", {
    title: "Developers",
    subject: filteredList.companyname,
    games: filteredList.games,
  });
});
