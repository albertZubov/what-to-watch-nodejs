export default class HelpCommand {
    constructor() {
        this.name = "--help";
    }
    async execute() {
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
//# sourceMappingURL=helper.command.js.map