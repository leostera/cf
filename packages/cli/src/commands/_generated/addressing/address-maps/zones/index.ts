/**
 * zones command group
 * @generated from apis/overlays/addressing.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "zones",
	describe: "Operations for address-maps.zones",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
