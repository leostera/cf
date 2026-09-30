/**
 * cf1-sites command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $ramps from "./ramps/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "cf1-sites",
	describe: "Operations for cf1-sites",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($ramps)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
