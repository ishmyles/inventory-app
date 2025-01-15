export const getAllDevelopers = (req, res) => res.send("SHOW ALL DEVELOPERS");

export const createDevelopersGet = (req, res) =>
  res.send("CREATE DEVELOPER FORM");

export const createDevelopersPost = (req, res) =>
  res.send("[POST]: New DEVELOPER created");

export const developerInfoGet = (req, res) =>
  res.send("DEVELOPER INFO AT ID: ");
