/**
 * logs command group
 * @generated from apis/overlays/r2.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "logs",
	describe: "Operations for super-slurper.jobs.logs",

	builder: (yargs) => {
		return yargs.command($list).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
