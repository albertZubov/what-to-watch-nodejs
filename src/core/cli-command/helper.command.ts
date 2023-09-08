import { CliCommandInterface } from "./cli-command.interface";

export default class HelpCommand implements CliCommandInterface {
  public readonly name = "--help";

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            main.js --<command> [--arguments]
        Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --import <path>:             # импортирует данные из TSV
        `);
  }
}
