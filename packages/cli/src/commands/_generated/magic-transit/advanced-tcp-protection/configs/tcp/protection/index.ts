/**
 * protection command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $status from "./status/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "protection",
	describe: "Operations for advanced-tcp-protection.configs.tcp.protection",

	builder: (yargs) => {
		return yargs
			.command($status)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
