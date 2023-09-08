import { readFileSync } from "fs";
import path from "path";
export default class VersionCommand {
    constructor() {
        this.name = "--version";
    }
    async execute() {
        const readPageJSON = readFileSync(path.resolve("./package.json"), "utf8");
        const content = JSON.parse(readPageJSON);
        const version = content.version;
        console.log(version);
    }
}
//# sourceMappingURL=version.command.js.map