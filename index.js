import express from "express";
import setMovies from "./movies/index";

import { PORT } from "./constants";
import setUsers from "./users";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setMovies(app);
setUsers(app);

app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});
