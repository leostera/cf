/**
 * summaries command group
 * @generated from apis/overlays/spectrum.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "summaries",
	describe: "Operations for analytics.events.summaries",

	builder: (yargs) => {
		return yargs.command($get).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
