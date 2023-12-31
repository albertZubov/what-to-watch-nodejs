import TSVFileReader from "../file-reader/tsv-file-reader.js";
export default class ImportCommand {
    constructor() {
        this.name = "--import";
    }
    execute(filename) {
        const fileReader = new TSVFileReader(filename.trim());
        try {
            fileReader.read();
            console.log(fileReader.toArray());
        }
        catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            console.log(`Не удалось импортировать данные из файла по причине: «${error.message}»`);
        }
    }
}
//# sourceMappingURL=import.command.js.map