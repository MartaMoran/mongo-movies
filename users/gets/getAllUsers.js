import { USERS_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import { MONGO_DB } from "../../mongo_middleware/constants";

const getAllUsers = async (request, response) => {
  const client = getclient();
  try {
    await client.connect();
    const database = client.db(`${MONGO_DB}`);
    const collection = database.collection(`${USERS_COLLECTION}`);
    let results = await collection
      .find()

      .toArray();
    response.send(results);
  } catch (error) {
    console.error("Error inesperado", error);
    response.send({ error: "error" });
  } finally {
    client.close();
  }
};

export default getAllUsers;
