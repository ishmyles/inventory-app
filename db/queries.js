import pool from "./pool.js";

export const getAllGames = async () => {
  const { rows } = await pool.query(`
        SELECT DISTINCT ga.id, ga.title, ga.img, de.companyName,  ga.releaseYear, ga.description, ga.notes, ga.isCompleted
        FROM game_genres gg 
        INNER JOIN genres ge ON gg.genreId=ge.id 
        INNER JOIN games ga ON gg.gameId=ga.id 
        INNER JOIN developers de ON de.id=ga.developer;
  `);

  return rows;
};

export const getAllDevelopers = async () => {
  const { rows } = await pool.query(`SELECT * FROM developers`);
  return rows;
};

export const getAllGenres = async () => {
  const { rows } = await pool.query(`SELECT * FROM genres`);
  return rows;
};

export const getGame = async (id) => {
  const games = await pool.query(
    `
    SELECT ga.id, title, img, de.companyName AS developer, releaseYear, description, notes, isCompleted 
    FROM games ga INNER JOIN developers de ON ga.developer = de.id
    WHERE ga.id = $1;`,
    [id]
  );

  const genres = await pool.query(
    `
    SELECT type FROM game_genres gg
    INNER JOIN games ga ON gg.gameId = ga.id
    INNER JOIN genres ge ON gg.genreId = ge.id
    WHERE gameId = $1;`,
    [id]
  );

  return { ...games.rows[0], genres: genres.rows };
};

export const getGamesByDeveloper = async (devId) => {
  const developer = await pool.query(
    `
    SELECT companyName FROM developers
    WHERE id = $1`,
    [devId]
  );

  const { rows } = await pool.query(
    `
        SELECT ga.id, title
        FROM games ga INNER JOIN developers de ON ga.developer = de.id
        WHERE de.id = $1;`,
    [devId]
  );
  return { ...developer.rows[0], games: rows };
};

export const getGamesByGenre = async (genreId) => {
  const genre = await pool.query(
    `
        SELECT type FROM genres
        WHERE id = $1`,
    [genreId]
  );

  const { rows } = await pool.query(
    `
            SELECT ga.id, ga.title
            FROM games ga INNER JOIN game_genres gg ON ga.id = gg.gameId
            INNER JOIN genres ge ON ge.id = gg.genreId
            WHERE ge.id = $1;`,
    [genreId]
  );
  return { ...genre.rows[0], games: rows };
};

export const createGame = async ({
  title,
  img,
  developer,
  releaseYear,
  description,
  notes,
  isCompleted,
  genre,
}) => {
  const gamesQuery = `
    INSERT INTO games (title, img, developer, releaseYear, description, notes, isCompleted)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  const values1 = [
    title,
    img,
    developer,
    releaseYear,
    description,
    notes,
    isCompleted,
  ];

  const genresQuery = `
  INSERT INTO game_genres (gameId, genreId)
  VALUES ($1, $2);`;

  const values2 = [...genre];

  await pool.query(gamesQuery, values1);

  const selectedGame = await pool.query(
    `SELECT id FROM games WHERE title = $1;`,
    [title]
  );

  const id = selectedGame.rows[0].id;

  values2.forEach(async (value) => await pool.query(genresQuery, [id, value]));
};

export const createDeveloper = async ({ companyName }) => {
  await pool.query(`INSERT INTO developers (companyName) VALUES ($1);`, [
    companyName,
  ]);
};

export const createGenre = async ({ type }) => {
  await pool.query(`INSERT INTO genres (type) VALUES ($1);`, [type]);
};
