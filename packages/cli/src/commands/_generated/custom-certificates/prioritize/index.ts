/**
 * prioritize command group
 * @generated from apis/overlays/custom-certificates.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "prioritize",
	describe: "Operations for prioritize",

	builder: (yargs) => {
		return yargs
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
