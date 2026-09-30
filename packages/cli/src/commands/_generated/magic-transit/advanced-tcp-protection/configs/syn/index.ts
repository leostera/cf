/**
 * syn command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $protection from "./protection/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "syn",
	describe: "Operations for advanced-tcp-protection.configs.syn",

	builder: (yargs) => {
		return yargs
			.command($protection)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
