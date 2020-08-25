import getAllMovies from "./gets/getAllMovies";
import { MOVIES_PATH } from "./constants";
import getOneMovie from "./gets/getOneMovie";
import updateOneMovie from "./puts/updateOne";
import patchOneMovie from "./patchs/patch";

const setMovies = (app) => {
  app.get(MOVIES_PATH, getAllMovies);
  app.get(`${MOVIES_PATH}/:id`, getOneMovie);
  app.put(`${MOVIES_PATH}/:id`, updateOneMovie);
  app.patch(`${MOVIES_PATH}/:id`, patchOneMovie);
};

export default setMovies;
