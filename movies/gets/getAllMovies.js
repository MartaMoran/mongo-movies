import { MOVIES_COLLECTION, MOVIES_PATH } from "../constants";
import getclient from "../../mongo_middleware/index";
import queryMongo from "./queryConstructor";
import optionsMongo from "./optionsConstructor";
import { MONGO_DB } from "../../mongo_middleware/constants";

const getAllMovies = async (request, response) => {
  const client = getclient();
  try {
    await client.connect();
    const database = client.db(`${MONGO_DB}`);
    const collection = database.collection(`${MOVIES_COLLECTION}`);
    let results = await collection
      .find(queryMongo(request), optionsMongo(request))

      .toArray();
    response.send(results);
  } catch (error) {
    console.error("Error inesperado", error);
    response.send({ error: "error" });
  } finally {
    client.close();
  }
};

export default getAllMovies;
