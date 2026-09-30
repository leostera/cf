/**
 * received command group
 * @generated from apis/overlays/logs.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $fields from "./fields/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "received",
	describe: "Received log operations",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($fields)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
