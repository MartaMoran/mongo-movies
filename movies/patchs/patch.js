import { MOVIES_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import { MONGO_DB } from "../../mongo_middleware/constants";
import { ObjectID, ObjectId } from "mongodb";
import bodyPatch from "./bodyPatch";

const patchOneMovie = async (request, response) => {
  const client = getclient();
  let { id } = request.params;
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(MOVIES_COLLECTION);
    let body = bodyPatch(request);
    await collection.updateOne({ _id: ObjectId(id) }, body);
    response.send({ ok: "todo ha ido bien" });
  } catch (error) {
    response.send({ error: "error", errorData: error.message });
  } finally {
    client.close();
  }
};

export default patchOneMovie;
