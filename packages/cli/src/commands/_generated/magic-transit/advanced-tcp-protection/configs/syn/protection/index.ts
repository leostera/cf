/**
 * protection command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $filters from "./filters/index.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "protection",
	describe: "Operations for advanced-tcp-protection.configs.syn.protection",

	builder: (yargs) => {
		return yargs
			.command($filters)
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
