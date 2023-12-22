import { Film, FilmGenre } from "../types/film.type.js";
import crypto from "crypto";

export const createOffer = (row: string) => {
  const [
    name,
    description,
    datePublic,
    genre,
    yearRelease,
    rating,
    previewSrc,
    videoSrc,
    actors,
    director,
    duration,
    quantityComments,
  ] = row.replace("\n", "").split("\t");

  return {
    name,
    description,
    datePublic,
    genre:
      FilmGenre[
        genre as
          | "comedy"
          | "crime"
          | "documentary"
          | "drama"
          | "horror"
          | "family"
          | "romance"
          | "scifi"
          | "thriller"
      ],
    yearRelease: +yearRelease,
    rating: +rating,
    previewSrc,
    videoSrc,
    actors: actors.split(","),
    director,
    duration: +duration,
    quantityComments: +quantityComments,
  } as Film;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "";

export const createSHA256 = (line: string, salt: string) => {
  const shaHasher = crypto.createHmac("sha256", salt);
  return shaHasher.update(line).digest("hex");
};

// public toArray(): Film[] {
//   if (!this.rawData) return [];

//   return this.rawData
//     .split("\n")
//     .filter((row) => row.trim() !== "")
//     .map((line) => line.split("\t"))
//     .map(
//       ([
//         name,
//         description,
//         datePublic,
//         genre,
//         yearRelease,
//         rating,
//         previewSrc,
//         videoSrc,
//         actors,
//         director,
//         duration,
//         quantityComments,
//       ]) => ({
//         name,
//         description,
//         datePublic,
//         genre:
//           FilmGenre[
//             genre as
//               | "comedy"
//               | "crime"
//               | "documentary"
//               | "drama"
//               | "horror"
//               | "family"
//               | "romance"
//               | "scifi"
//               | "thriller"
//           ],
//         yearRelease: +yearRelease,
//         rating: +rating,
//         previewSrc,
//         videoSrc,
//         actors: actors.split(","),
//         director,
//         duration: +duration,
//         quantityComments: +quantityComments,
//       })
//     );
// }
