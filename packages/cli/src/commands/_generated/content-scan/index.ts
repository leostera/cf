/**
 * content-scan command
 * @generated from apis/overlays/content-scan.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $update from "./update.js";
import $expressions from "./expressions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "content-scan",
	describe:
		"Malicious uploads detection, scan uploaded content in HTTP requests for malware and malicious payloads",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($update)
			.command($expressions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
