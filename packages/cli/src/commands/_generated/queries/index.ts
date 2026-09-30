/**
 * queries command
 * @generated from apis/overlays/queries.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $bulk from "./bulk/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "queries",
	describe: "queries",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($bulk)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
