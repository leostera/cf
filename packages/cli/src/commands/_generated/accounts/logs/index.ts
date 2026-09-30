/**
 * logs command group
 * @generated from apis/overlays/accounts.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $audit from "./audit/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "logs",
	describe: "Operations for logs",

	builder: (yargs) => {
		return yargs
			.command($audit)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
