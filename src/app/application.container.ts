import { Container } from "inversify";
import { Component } from "../types/component.types.js";
import Application from "./application.js";
import { LoggerInterface } from "../common/logger/logger.interface.js";
import LoggerService from "../common/logger/logger.service.js";
import { ConfigInterface } from "../common/config/config.interface.js";
import ConfigService from "../common/config/config.service.js";
import DatabaseService from "../common/database-client/database.service.js";
import { DatabaseInterface } from "../common/database-client/database.interface.js";

const applicationContainer = new Container();

applicationContainer
  .bind<Application>(Component.Application)
  .to(Application)
  .inSingletonScope();

applicationContainer
  .bind<LoggerInterface>(Component.LoggerInterface)
  .to(LoggerService)
  .inSingletonScope();

applicationContainer
  .bind<ConfigInterface>(Component.ConfigInterface)
  .to(ConfigService)
  .inSingletonScope();

applicationContainer
  .bind<DatabaseInterface>(Component.DatabaseInterface)
  .to(DatabaseService)
  .inSingletonScope();

export { applicationContainer };

// TODO npm run ts ./src/main.cli.ts -- --import ./mocks/mock-data.tsv admin test 127.0.0.1 nodeJS secret
