import { DatabaseInterface } from "../../common/database-client/database.interface.js";
import DatabaseService from "../../common/database-client/database.service.js";
import ConsoleLoggerService from "../../common/logger/console-logger.service.js";
import { LoggerInterface } from "../../common/logger/logger.interface.js";
import { FilmServiceInterface } from "../../modules/film/film-service.interface.js";
import { FilmModel } from "../../modules/film/film.entity.js";
import FilmService from "../../modules/film/film.service.js";
import { UserServiceInterface } from "../../modules/user/user-service.interface.js";
import { UserModel } from "../../modules/user/user.entity.js";
import UserService from "../../modules/user/user.service.js";
import { createOffer, getErrorMessage } from "../../utils/common.js";
import TSVFileReader from "../file-reader/tsv-file-reader.js";
import { CliCommandInterface } from "./cli-command.interface";

const DEFAULT_DB_PORT = 27017;
const DEFAULT_USER_PASSWORD = "12345678";

export default class ImportCommand implements CliCommandInterface {
  public readonly name = "--import";
  private userService!: UserServiceInterface;
  private filmService!: FilmServiceInterface;
  // TODO не хватает commentService
  private databaseService!: DatabaseInterface;
  private logger!: LoggerInterface;
  private salt!: string;

  constructor() {
    this.online = this.online.bind(this);
    this.onComplete = this.onComplete.bind(this);

    this.logger = new ConsoleLoggerService();
    // TODO не хватает this.commentService
    this.userService = new UserService(this.logger, UserModel);
    this.filmService = new FilmService(this.logger, FilmModel);
    this.databaseService = new DatabaseService(this.logger);
  }

  // private async saveOffer(offer) {}

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
