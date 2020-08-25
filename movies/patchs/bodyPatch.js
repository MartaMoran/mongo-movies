const bodyPatch = (request) => {
  let { op, val } = request.body;

  if (op === "updateTitle") {
    if (typeof val !== "string") {
      throw new Error("error en title");
    }

    return { $set: { title: val } };
  }
  if (op === "addGenre") {
    if (typeof val !== "string") {
      throw new Error("error en añadir genero");
    }
    return { $addToSet: { genres: val } };
  }
  if (op === "removeGenre") {
    return { $pull: { genres: val } };
  }
  if (op === "updateLastUpdate") {
    return { $currentDate: { lastupdated: { $type: "date" } } };
  }
  if (op === "addNominations") {
    return { $inc: { "awards.nominations": val } };
  }
  throw new Error("Error en la función");
};

export default bodyPatch;
