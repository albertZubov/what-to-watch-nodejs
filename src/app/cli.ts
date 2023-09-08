import { CliCommandInterface } from "../core/cli-command/cli-command.interface";

type ParsedCommand = {
  [key: string]: string[];
};

export default class CLIApplication {
  private commands: { [propertyName: string]: CliCommandInterface } = {};
  private defaultCommand = "--help";

  private parseCommand(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = "";

    const reduceCliArguments = cliArguments.reduce((acc, item) => {
      if (item.startsWith("--")) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedCommand);

    return reduceCliArguments;
  }

  public getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  public processCommand(argv: string[]): void {
    const parsedCommand = this.parseCommand(argv);
    const [commandName] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    // console.log(command, "test");
    const commandArguments = parsedCommand[commandName] ?? [];
    console.log(parsedCommand);
    command.execute(...commandArguments);
  }

  public registerCommands(commandList: CliCommandInterface[]): void {
    console.log(commandList[0], "commandList");
    commandList.reduce((acc, command) => {
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }
}
