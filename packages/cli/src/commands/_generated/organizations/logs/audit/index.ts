/**
 * audit command group
 * @generated from apis/overlays/organizations.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $history from "./history.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "audit",
	describe: "Operations for logs.audit",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($history)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
