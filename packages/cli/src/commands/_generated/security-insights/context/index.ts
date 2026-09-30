/**
 * context command group
 * @generated from apis/overlays/security-insights.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "context",
	describe: "Operations for context",

	builder: (yargs) => {
		return yargs.command($get).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
