import { LoggerInterface } from "../logger/logger.interface";
import { config } from "dotenv";
import { ConfigInterface } from "./config.interface";
import { configSchema, ConfigSchema } from "./config.schema.js";
import { inject, injectable } from "inversify";
import { Component } from "../../types/component.types.js";

@injectable()
export default class ConfigService implements ConfigInterface {
  private config: ConfigSchema;
  private logger: LoggerInterface;

  constructor(@inject(Component.LoggerInterface) logger: LoggerInterface) {
    this.logger = logger;

    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error(".env file not read");
    }

    configSchema.load({});
    configSchema.validate({ allowed: "strict", output: this.logger.info });
    this.config = configSchema.getProperties();
    this.logger.info(".env file read");
  }

  public get<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}
