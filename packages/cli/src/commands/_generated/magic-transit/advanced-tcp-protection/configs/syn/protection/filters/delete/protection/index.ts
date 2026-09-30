/**
 * protection command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $filter from "./filter.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "protection",
	describe:
		"Operations for advanced-tcp-protection.configs.syn.protection.filters.delete.protection",

	builder: (yargs) => {
		return yargs
			.command($filter)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
