import { readFileSync } from "fs";
import { CliCommandInterface } from "./cli-command.interface";
import path from "path";

export default class VersionCommand implements CliCommandInterface {
  public readonly name = "--version";

  public async execute(): Promise<void> {
    const readPageJSON = readFileSync(path.resolve("./package.json"), "utf8");
    const content = JSON.parse(readPageJSON);
    const version = content.version;
    console.log(version);
  }
}
