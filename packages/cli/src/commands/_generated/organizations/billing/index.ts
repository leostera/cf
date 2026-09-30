/**
 * billing command group
 * @generated from apis/overlays/organizations.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $usage from "./usage/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "billing",
	describe: "Operations for billing",

	builder: (yargs) => {
		return yargs
			.command($usage)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
