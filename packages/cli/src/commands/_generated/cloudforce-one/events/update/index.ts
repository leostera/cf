/**
 * update command group
 * @generated from apis/overlays/cloudforce-one.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $bulk from "./bulk/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "update",
	describe: "Operations for events.update",

	builder: (yargs) => {
		return yargs.command($bulk).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
