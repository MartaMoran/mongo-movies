import { USERS_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import { MONGO_DB } from "../../mongo_middleware/constants";
import { ObjectID } from "mongodb";

const deleteUser = async (request, response) => {
  const client = getclient();
  let { id } = request.params;
  try {
    await client.connect();
    const dataBase = client.db(MONGO_DB);
    const collection = dataBase.collection(USERS_COLLECTION);
    await collection.deleteOne({ _id: ObjectID(id) });
    response.send({ ok: "todo ha ido ok" });
  } catch (errors) {
    response.send({
      errors: "error inesperado",
      errorData: "no se ha eliminado ningún registro",
    });
  } finally {
    client.close();
  }
};

export default deleteUser;
