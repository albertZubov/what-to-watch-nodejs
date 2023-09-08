export default class CLIApplication {
    constructor() {
        this.commands = {};
        this.defaultCommand = "--help";
    }
    parseCommand(cliArguments) {
        const parsedCommand = {};
        let command = "";
        const reduceCliArguments = cliArguments.reduce((acc, item) => {
            if (item.startsWith("--")) {
                acc[item] = [];
                command = item;
            }
            else if (command && item) {
                acc[command].push(item);
            }
            return acc;
        }, parsedCommand);
        return reduceCliArguments;
    }
    getCommand(commandName) {
        return this.commands[commandName] ?? this.commands[this.defaultCommand];
    }
    processCommand(argv) {
        const parsedCommand = this.parseCommand(argv);
        const [commandName] = Object.keys(parsedCommand);
        const command = this.getCommand(commandName);
        // console.log(command, "test");
        const commandArguments = parsedCommand[commandName] ?? [];
        console.log(parsedCommand);
        command.execute(...commandArguments);
    }
    registerCommands(commandList) {
        console.log(commandList[0], "commandList");
        commandList.reduce((acc, command) => {
            const cliCommand = command;
            acc[cliCommand.name] = cliCommand;
            return acc;
        }, this.commands);
    }
}
//# sourceMappingURL=cli.js.map