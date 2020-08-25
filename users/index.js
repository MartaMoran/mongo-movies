import { USERS_PATH } from "./constants";
import postNew from "./posts/postNew";
import getAllUsers from "./gets/getAllUsers";
import deleteUser from "./delete/deleteUser";

const setUsers = (app) => {
  app.get(USERS_PATH, getAllUsers);
  app.post(USERS_PATH, postNew);
  app.delete(`${USERS_PATH}/:id`, deleteUser);
};
export default setUsers;
