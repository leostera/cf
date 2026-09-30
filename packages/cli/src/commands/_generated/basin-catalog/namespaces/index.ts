/**
 * namespaces command group
 * @generated from apis/overlays/basin-catalog.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $tables from "./tables/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "namespaces",
	describe:
		"Logical namespaces that group related tables within the data catalog",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($tables)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
