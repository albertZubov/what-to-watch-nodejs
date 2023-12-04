import pino, { Logger } from "pino";
import { LoggerInterface } from "./logger.interface";
import { injectable } from "inversify";

@injectable()
export default class LoggerService implements LoggerInterface {
  private logger!: Logger;

  constructor() {
    this.logger = pino();
  }

  info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }
}
