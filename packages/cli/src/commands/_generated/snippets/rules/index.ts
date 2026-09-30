/**
 * rules command group
 * @generated from apis/overlays/snippets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $list from "./list.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rules",
	describe: "Operations for rules",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($list)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
