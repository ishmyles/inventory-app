import { body } from "express-validator";

export const validateGameForm = [
  body("title").notEmpty().withMessage("Game title required."),
  body("img").trim(),
  body("developer").toInt().isInt().withMessage("Must select a developer."),
  body("releaseYear")
    .toInt()
    .isInt()
    .withMessage("Release Year must be a number."),
  body("description")
    .isLength({ max: 255 })
    .withMessage("Description max length is 255 characters."),
  body("notes")
    .isLength({ max: 255 })
    .withMessage("Notes max length is 255 characters."),
  body("isCompleted")
    .customSanitizer((value) => {
      return value === "true" || value === true ? true : false;
    })
    .isBoolean()
    .withMessage("Must select yes or no"),
];

export const validateDeveloperForm = [
  body("companyName").notEmpty().withMessage("Game Studio name required."),
];

export const validateGenreForm = [
  body("type").notEmpty().withMessage("Genre type required."),
];
