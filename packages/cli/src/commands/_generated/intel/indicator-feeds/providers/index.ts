/**
 * providers command group
 * @generated from apis/overlays/intel.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "providers",
	describe: "Operations for indicator-feeds.providers",

	builder: (yargs) => {
		return yargs
			.command($create)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
