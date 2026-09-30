/**
 * delete command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $for from "./for/index.js";
import $protection from "./protection/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "delete",
	describe:
		"Operations for advanced-tcp-protection.configs.tcp.flow.protection.filters.delete",

	builder: (yargs) => {
		return yargs
			.command($for)
			.command($protection)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
