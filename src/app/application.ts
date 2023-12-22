import { inject, injectable } from "inversify";
import { ConfigInterface } from "../common/config/config.interface";
import { LoggerInterface } from "../common/logger/logger.interface";
import { Component } from "../types/component.types.js";
import { DatabaseInterface } from "../common/database-client/database.interface";
import { getURI } from "../utils/db.js";

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface,
    @inject(Component.DatabaseInterface)
    private databaseClient: DatabaseInterface
  ) {}

  public async init() {
    this.logger.info("Application initialization");
    this.logger.info(`current PORT ${this.config.get("PORT")}`);
    this.logger.warn(`SALT ${this.config.get("SALT")}`);

    const uri = getURI(
      this.config.get("DB_USER"),
      this.config.get("DB_PASSWORD"),
      this.config.get("DB_HOST"),
      this.config.get("DB_PORT"),
      this.config.get("DB_NAME")
    );

    await this.databaseClient.connect(uri);
  }
}

// TODO проверить все по заданию https://up.htmlacademy.ru/nodejs-api/3/tasks/6 и запушить
