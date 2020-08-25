const bodyPost = (request) => {
  let obj = {};
  let { name, email, password } = request.body;
  if (!name || typeof name !== "string") {
    throw new Error("error en name");
  }
  if (name) {
    obj.name = name;
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("error en mail");
  }
  if (email) {
    obj.email = email;
  }
  if (!password || typeof password !== "string") {
    throw new Error("error en password");
  }
  if (password) {
    obj.password = password;
  }
  return obj;
};
export default bodyPost;
