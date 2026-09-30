/**
 * validate command group
 * @generated from apis/overlays/addressing.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "validate",
	describe: "Operations for prefixes.validate",

	builder: (yargs) => {
		return yargs
			.command($create)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
