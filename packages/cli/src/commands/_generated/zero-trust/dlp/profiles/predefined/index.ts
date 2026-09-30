/**
 * predefined command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "predefined",
	describe: "Data Loss Prevention - manage predefined profiles",

	builder: (yargs) => {
		return yargs
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
