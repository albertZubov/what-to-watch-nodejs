import { createOffer, getErrorMessage } from "../../utils/common.js";
import TSVFileReader from "../file-reader/tsv-file-reader.js";
import { CliCommandInterface } from "./cli-command.interface";

export default class ImportCommand implements CliCommandInterface {
  public readonly name = "--import";

  private online(line: string) {
    const offer = createOffer(line);
    console.log(offer);
  }

  private onComplete(count: number) {
    console.log(`${count} строки импортировано.`);
  }

  public async execute(filename: string): Promise<void> {
    const fileReader = new TSVFileReader(filename.trim());
    fileReader.on("line", this.online);
    fileReader.on("end", this.onComplete);

    try {
      await fileReader.read();
    } catch (error) {
      console.log(`Не удалось прочитать файл ${getErrorMessage(error)}`);
    }
  }
}
