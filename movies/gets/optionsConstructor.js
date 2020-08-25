import { response, request, query } from "express";

const optionsMongo = (request) => {
  const optionsM = {};
  let {
    page = 0,
    page_size = 10,
    title_asc = "true",
    title_desc,
    rating_asc,
    rating_desc,
    year_asc,
    year_desc,
  } = request.query;

  if (!isNaN(page_size)) {
    optionsM.limit = parseInt(page_size);
  } else {
    optionsM.limit = page_size;
  }
  if (!isNaN(page)) {
    optionsM.skip = (parseInt(page) - 1) * parseInt(page_size);
  }
  if (!page) {
    optionsM.skip = page * parseInt(page_size);
  }
  if (title_asc === "true") {
    optionsM.sort = { title: 1 };
  }
  if (title_desc === "true") {
    optionsM.sort = { title: -1 };
  }
  if (rating_asc === "true") {
    optionsM.sort = [["imdb.rating", 1]];
  }
  if (rating_desc === "true") {
    optionsM.sort = [["imdb.rating", -1]];
  }
  if (year_asc === "true") {
    optionsM.sort = { year: 1 };
  }
  if (year_desc === "true") {
    optionsM.sort = { year: -1 };
  }
  optionsM.projection = {
    _id: 1,
    title: 1,
    genres: 1,
    year: 1,
    plot: 1,
    poster: 1,
    "imdb.rating": 1,
  };
  return optionsM;
};

export default optionsMongo;
