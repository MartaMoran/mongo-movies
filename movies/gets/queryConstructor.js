import { response, query } from "express";

const queryMongo = (request) => {
  let queryM = {};
  let { min_year, max_year, rating, genre, twodirectors } = request.query;
  if (min_year) {
    queryM.year = { $gt: parseInt(min_year) };
  }
  if (max_year) {
    queryM.year = { $lt: parseInt(max_year) };
  }
  if (min_year && max_year) {
    queryM.$and = [
      { year: { $gt: parseInt(min_year) } },
      { year: { $lt: parseInt(max_year) } },
    ];
  }
  if (rating) {
    queryM["imdb.rating"] = { $gte: parseFloat(rating) };
  }

  if (genre) {
    queryM.genres =
      typeof genre === "string" ? { $in: genre.split(",") } : { $in: genre };
  }
  if (twodirectors === "true") {
    queryM.directors = { $size: 2 };
  }

  return queryM;
};

export default queryMongo;
