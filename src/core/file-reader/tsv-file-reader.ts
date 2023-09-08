import { readFileSync } from "fs";
import { FileReaderInterface } from "./file-reader.interface";
import { Film, FilmGenre } from "../../types/film.type.js";

export default class TSVFileReader implements FileReaderInterface {
  private rawData = "";

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: "utf8" });
  }

  public toArray(): Film[] {
    if (!this.rawData) return [];

    return this.rawData
      .split("\n")
      .filter((row) => row.trim() !== "")
      .map((line) => line.split("\t"))
      .map(
        ([
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
        ]) => ({
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
        })
      );
  }
}
