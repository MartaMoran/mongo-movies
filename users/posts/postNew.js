import { USERS_COLLECTION } from "../constants";
import getclient from "../../mongo_middleware/index";
import { MONGO_DB } from "../../mongo_middleware/constants";
import bodyPost from "./bodyPost";
import { ObjectID } from "mongodb";

const postNew = async (request, response) => {
  const client = getclient();
  try {
    await client.connect();
    const dataBase = client.db(MONGO_DB);
    const collection = dataBase.collection(USERS_COLLECTION);
    await collection.insertOne(bodyPost(request));
    response.send({ _id: ObjectID() });
  } catch (errors) {
    response.send({ errors: "error inesperado", errorData: errors.message });
  } finally {
    client.close();
  }
};

export default postNew;
