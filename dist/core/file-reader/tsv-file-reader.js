import { readFileSync } from "fs";
import { FilmGenre } from "../../types/film.type.js";
export default class TSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.rawData = "";
    }
    read() {
        this.rawData = readFileSync(this.filename, { encoding: "utf8" });
    }
    toArray() {
        if (!this.rawData)
            return [];
        return this.rawData
            .split("\n")
            .filter((row) => row.trim() !== "")
            .map((line) => line.split("\t"))
            .map(([name, description, datePublic, genre, yearRelease, rating, previewSrc, videoSrc, actors, director, duration, quantityComments,]) => ({
            name,
            description,
            datePublic,
            genre: FilmGenre[genre],
            yearRelease: +yearRelease,
            rating: +rating,
            previewSrc,
            videoSrc,
            actors: actors.split(","),
            director,
            duration: +duration,
            quantityComments: +quantityComments,
        }));
    }
}
//# sourceMappingURL=tsv-file-reader.js.map