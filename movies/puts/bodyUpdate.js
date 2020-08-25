import isString from "./auxiliarFunction";

const bodyUpdate = (request) => {
  let obj = {};
  let {
    title,
    genres = [],
    year,
    cast,
    countries = [],
    directors,
    rated = "UNRATED",
    plot,
    fullplot,
    type = "movie",
    poster,
    awards = { null: null },
    released,
  } = request.body;

  if (!title || typeof title !== "string") {
    throw new Error("Error en title");
  }
  if (title) {
    obj.title = title;
  }
  if (!year || typeof year !== "number") {
    throw new Error("Error en year ");
  }
  if (year) {
    obj.year = year;
  }
  if (!Array.isArray(genres) || genres.every(isString) === false) {
    throw new Error("Error en genres");
  }
  if (genres) {
    obj.genres = genres;
  }
  if (!genres) {
    obj.genres = genres;
  }
  if (!cast || !Array.isArray(cast) || cast.every(isString) === false) {
    throw new Error("error en cast");
  }
  if (cast) {
    obj.cast = cast;
  }
  if (!Array.isArray(countries) || countries.every(isString) === false) {
    throw new Error("Error en countries");
  }
  if (countries) {
    obj.countries = countries;
  }
  if (!countries) {
    obj.countries = countries;
  }
  if (
    !directors ||
    !Array.isArray(directors) ||
    directors.every(isString) === false
  ) {
    throw new Error("Error en directors");
  }
  if (directors) {
    obj.directors = directors;
  }
  if (typeof rated !== "string") {
    throw new Error("error en rated");
  }
  if (!rated) {
    obj.rated = rated;
  }
  if (rated && typeof rated === "string") {
    obj.rated = rated;
  }
  if (!plot || typeof plot !== "string") {
    throw new Error("error en plot");
  }
  if (plot) {
    obj.plot = plot;
  }
  if (!fullplot || typeof fullplot !== "string") {
    throw new Error("error en fullplot");
  }
  if (fullplot) {
    obj.fullplot = fullplot;
  }
  if (!poster || typeof poster !== "string") {
    throw new Error("Error en poster");
  }
  if (poster && typeof poster === "string") {
    obj.poster = poster;
  }
  if (type && typeof type !== "string") {
    throw new Error("error en type");
  }
  if (type && typeof type === "string") {
    obj.type = type;
  }
  if (!type) {
    obj.type = type;
  }
  if (!awards) {
    obj.awards = awards;
  }
  if (
    (awards && !awards.hasOwnProperty("wins")) ||
    !awards.hasOwnProperty("nominations") ||
    !awards.hasOwnProperty("text")
  ) {
    throw new Error("error en awards");
  } else {
    obj.awards = awards;
  }
  if (!released || typeof released !== "string") {
    throw new Error("error en released");
  }
  if (released) {
    obj.released = new Date(released);
  }

  return obj;
};

export default bodyUpdate;
