import { MOVIES_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import { MONGO_DB } from "../../mongo_middleware/constants";
import { ObjectID } from "mongodb";

const getOneMovie = async (request, response) => {
  const client = getclient();
  let { id } = request.params;
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MOVIES_COLLECTION);

    let results = await collection.findOne({ _id: ObjectID(id) });
    response.send(results);
  } catch (error) {
    console.error("Error inesperado", error);
    response.send({ error: "error" });
  } finally {
    client.close();
  }
};

export default getOneMovie;
