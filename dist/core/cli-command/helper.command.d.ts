import { CliCommandInterface } from "./cli-command.interface";
export default class HelpCommand implements CliCommandInterface {
    readonly name = "--help";
    execute(): Promise<void>;
}
