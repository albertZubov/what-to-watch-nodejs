import { FileReaderInterface } from "./file-reader.interface";
import { Film } from "../../types/film.type.js";
export default class TSVFileReader implements FileReaderInterface {
    filename: string;
    private rawData;
    constructor(filename: string);
    read(): void;
    toArray(): Film[];
}
