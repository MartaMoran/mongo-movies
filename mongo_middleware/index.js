import { MongoClient } from "mongodb";
import { MONGO_URL, MONGO_PSW, EXPORT_USER, MONGO_DB } from "./constants";

const uri = `mongodb+srv://${EXPORT_USER}:${MONGO_PSW}@${MONGO_URL}/${MONGO_DB}?retryWrites=true&w=majority`;
const getclient = () => {
  return new MongoClient(uri, { useNewUrlParser: true });
};

export default getclient;
