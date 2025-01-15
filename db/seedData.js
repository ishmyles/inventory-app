import "dotenv/config";
import pkg from "pg";
const { Client } = pkg;

const SQL = `
DROP TABLE IF EXISTS game_genres;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS developers;
DROP TABLE IF EXISTS genres;

CREATE TABLE IF NOT EXISTS developers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 75 ) NOT NULL,
  img VARCHAR ( 255 ),
  developer INTEGER,
  releaseYear INTEGER,
  description VARCHAR ( 255 ),
  notes VARCHAR ( 255 ),
  isCompleted BOOLEAN,
  FOREIGN KEY ( developer ) REFERENCES developers( id )
);

CREATE TABLE IF NOT EXISTS game_genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  gameId INTEGER,
  genreId INTEGER,
  FOREIGN KEY ( gameId ) REFERENCES games( id ),
  FOREIGN KEY ( genreId ) REFERENCES genres( id )
);

INSERT INTO genres (type) 
VALUES
  ('RPG'),
  ('Action role-playing game'),
  ('Action-adventure game'),
  ('Simulation video game'),
  ('Puzzle'),
  ('Fighting'),
  ('First-person shooter'),
  ('Sandbox'),
  ('Sports'),
  ('Shooter'),
  ('Survival Horror'),
  ('Platformer'),
  ('Adventure'),
  ('Racing'),
  ('Strategy game'),
  ('Survival game'),
  ('MMO'),
  ('Real-time strategy'),
  ('Casual'),
  ('Stealth'),
  ('Strategy'),
  ('Text-based game'),
  ('Adventure game'),
  ('Card game'),
  ('Tower defense'),
  ('MOBA'),
  ('Hack & slash');

INSERT INTO developers (name)
VALUES
  ('FromSoftware'),
  ('Riot Games'),
  ('CD Projekt Red'),
  ('Santa Monica Studio'),
  ('Hazelight Studios'),
  ('Capcom'),
  ('BANDAI NAMCO'),
  ('Game Freak'),
  ('Infinity Ward'),
  ('Treyarch'),
  ('Rockstar North'),
  ('Blizzard Entertainment'),
  ('2K Games'),
  ('Electronic Arts'),
  ('Square Enix'),
  ('Sucker Punch Productions');

INSERT INTO games (title, img, developer, releaseYear, description, notes, isCompleted)
VALUES
  ('Final Fantasy XV', 'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg?20200503000759', 15, 2016, 'Open-world game with RTS fights', 'None', TRUE),
  ('God of War', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg', 4, 2018, 'Reboot to GoW franchise with Norse Mythology', 'None', TRUE),
  ('God of War: Ragnarok', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg/220px-God_of_War_Ragnar%C3%B6k_cover.jpg', 4, 2022, 'Sequel to GoW 2018 reboot', 'None', FALSE),
  ('Elden Ring', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg', 1, 2022, 'Open-world souls-like game', 'Really hard game to play', TRUE),
  ('Tekken 8', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tekken_8_cover_art.jpg/220px-Tekken_8_cover_art.jpg', 7, 2024, '8th cannon game', 'Uses Unreal Engine 5', TRUE),
  ('Devil May Cry 5', 'https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg', 6, 2019, '6th installment of the game', 'Uses the RE Engine for a more cinematic experience', TRUE),
  ('Ghost of Tsushima', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg', 16, 2020, 'Historic retelling of the first Mogol invasion', 'None', FALSE),
  ('It Takes Two', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/It_Takes_Two_cover_art.png/220px-It_Takes_Two_cover_art.png', 5, 2021, 'Co-op game that won GOTY', 'Need a partner to play with', FALSE),
  ('Diablo IV', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Diablo_IV_cover_art.png/220px-Diablo_IV_cover_art.png', 12, 2023, 'Fourth installment of the franchise', 'None', TRUE),
  ('Call of Duty: Modern Warfare', 'https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg', 9, 2019, 'Reboot of the Modern Warfare franchise', 'None', TRUE),
  ('NBA 2K25', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/NBA_2K25_cover_art.jpg/220px-NBA_2K25_cover_art.jpg', 13, 2024, 'Game based on the NBA and the recent roster for the upcoming season', 'None', FALSE),
  ('FC25', 'https://upload.wikimedia.org/wikipedia/en/0/09/EA_FC_25_Cover.jpg', 14, 2024, 'Game based on the global football leagues', 'None', FALSE),
  ('Resident Evil 7', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_7_cover_art.jpg/220px-Resident_Evil_7_cover_art.jpg', 6, 2017, 'New ', 'None', FALSE),
  ('Valorant', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Valorant_cover.jpg/220px-Valorant_cover.jpg', 2, 2020, '5v5 Tactical shooter', 'None', TRUE),
  ('Cyberpunk 2077', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', 3, 2020, 'Immersive story-packed action adventure game that features Keanu Reeves', 'None', TRUE),
  ('Kingdom Hearts II', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Kingdom_Hearts_II_%28PS2%29.jpg/220px-Kingdom_Hearts_II_%28PS2%29.jpg', 15, 2006, 'Sequel to the original game, feature more Disney characters', 'None', TRUE);

INSERT INTO game_genres (gameId, genreId)
VALUES
  (1, 2),
  (2, 2),
  (2, 27),
  (3, 3),
  (3, 27),
  (4, 2),
  (5, 6),
  (6, 3),
  (6, 27),
  (7, 3),
  (8, 3),
  (8, 12),
  (9, 2),
  (9, 27),
  (10, 7),
  (11, 9),
  (12, 9),
  (13, 11),
  (13, 10),
  (14, 7),
  (15, 2),
  (16, 2);
`;

async function populateData() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.PASSWORD}@${process.env.DB_DEV_HOST}:${process.env.DB_DEV_PORT}/inventory`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("complete!");
}

populateData();
