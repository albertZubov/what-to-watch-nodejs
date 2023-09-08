import { CliCommandInterface } from "./cli-command.interface";
export default class ImportCommand implements CliCommandInterface {
    readonly name = "--import";
    execute(filename: string): void;
}
