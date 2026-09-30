/**
 * tokens command group
 * @generated from apis/overlays/builds.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tokens",
	describe: "Manage credentials used by Workers Builds to deploy Workers.",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
