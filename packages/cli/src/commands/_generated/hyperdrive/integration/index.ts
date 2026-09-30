/**
 * integration command group
 * @generated from apis/overlays/hyperdrive.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $planetscale from "./planetscale/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "integration",
	describe: "Operations for integration",

	builder: (yargs) => {
		return yargs
			.command($planetscale)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
