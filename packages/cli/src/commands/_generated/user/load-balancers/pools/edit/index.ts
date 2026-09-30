/**
 * edit command group
 * @generated from apis/overlays/user.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $pools from "./pools/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "edit",
	describe: "Operations for load-balancers.pools.edit",

	builder: (yargs) => {
		return yargs
			.command($pools)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
