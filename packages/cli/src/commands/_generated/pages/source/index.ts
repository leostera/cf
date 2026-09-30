/**
 * source command group
 * @generated from apis/overlays/pages.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $connect from "./connect.js";
import $disconnect from "./disconnect.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "source",
	describe: "Operations for source",

	builder: (yargs) => {
		return yargs
			.command($connect)
			.command($disconnect)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
