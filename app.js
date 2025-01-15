import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import gamesRouter from "./routes/gamesRouter.js";
import developersRouter from "./routes/developersRouter.js";
import genresRouter from "./routes/genresRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const _PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/games", gamesRouter);
app.use("/genres", genresRouter);
app.use("/developers", developersRouter);

app.get("/", (req, res) => res.render("index"));

app.get("*", (req, res) => res.send("404: Page not found."));

app.listen(_PORT, () => console.log(`Server now listening on port ${_PORT}`));
