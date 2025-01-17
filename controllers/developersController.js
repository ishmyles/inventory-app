import {
  createDeveloper,
  deleteDev,
  getAllDevelopers,
  getDeveloperById,
  getGamesByDeveloper,
  updateDeveloper,
} from "../db/queries.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import pool from "../db/pool.js";

export const getDevelopers = asyncHandler(async (req, res) => {
  const developersList = await getAllDevelopers();
  res.render("listPage", { title: "Developers", developers: developersList });
});

export const createDevelopersGet = (req, res) =>
  res.render("developerForm", {
    action: "Add",
    actionLink: "/developers/new",
  });

export const createDevelopersPost = asyncHandler(async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errMsg = result.array();
    res.render("developerForm", {
      action: "Add",
      actionLink: "/developers/" + id + "/new",
      err: errMsg[0].msg,
    });
  } else {
    await createDeveloper(req.body);
    res.redirect("/developers");
  }
});

export const developerInfoGet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const filteredList = await getGamesByDeveloper(id);

  res.render("filteredGames", {
    title: "Developers",
    id: id,
    subject: filteredList.companyname,
    games: filteredList.games,
  });
});

export const developerUpdateGet = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const developerInfo = await getDeveloperById(id);

  res.render("developerForm", {
    action: "Update",
    actionLink: "/developers/" + id + "/update",
    dev: developerInfo,
  });
});

export const developerUpdatePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedDevData = { id: id, ...req.body };
  await updateDeveloper(updatedDevData);
  res.redirect("/developers/" + id);
});

export const developerDeletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await deleteDev(id);

  res.redirect("/developers");
});
