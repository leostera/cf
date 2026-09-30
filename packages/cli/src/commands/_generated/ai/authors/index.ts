/**
 * authors command group
 * @generated from apis/overlays/ai.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "authors",
	describe: "Operations for authors",

	builder: (yargs) => {
		return yargs.command($list).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
