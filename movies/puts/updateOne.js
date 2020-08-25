import { MOVIES_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import MONGO_DB from "../../mongo_middleware/constants";
import { ObjectID, ObjectId } from "mongodb";
import bodyUpdate from "./bodyUpdate";

const updateOneMovie = async (request, response) => {
  const client = getclient();
  let { id } = request.params;
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MOVIES_COLLECTION);
    let body = bodyUpdate(request);
    await collection.updateOne({ _id: ObjectId(id) }, { $set: body });
    response.send({ ok: "todo ha ido bien" });
  } catch (errors) {
    response.send({ errors: "error inesperado", errorData: errors.message });
  } finally {
    client.close();
  }
};

export default updateOneMovie;
