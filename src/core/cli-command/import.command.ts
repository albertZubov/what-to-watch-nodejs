import TSVFileReader from "../file-reader/tsv-file-reader.js";
import { CliCommandInterface } from "./cli-command.interface";

export default class ImportCommand implements CliCommandInterface {
  public readonly name = "--import";

  public execute(filename: string): void {
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error;
      }

      console.log(
        `Не удалось импортировать данные из файла по причине: «${error.message}»`
      );
    }
  }
}
