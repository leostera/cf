/**
 * events command group
 * @generated from apis/overlays/workflows.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $send from "./send.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "events",
	describe: "Operations for instances.events",

	builder: (yargs) => {
		return yargs.command($send).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
