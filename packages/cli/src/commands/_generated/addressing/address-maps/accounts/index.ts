/**
 * accounts command group
 * @generated from apis/overlays/addressing.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "accounts",
	describe: "Operations for address-maps.accounts",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
