import { CliCommandInterface } from "./cli-command.interface";
export default class VersionCommand implements CliCommandInterface {
    readonly name = "--version";
    execute(): Promise<void>;
}
