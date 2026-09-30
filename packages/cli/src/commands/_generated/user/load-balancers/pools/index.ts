/**
 * pools command group
 * @generated from apis/overlays/user.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $edit from "./edit/index.js";
import $health from "./health/index.js";
import $preview from "./preview/index.js";
import $references from "./references/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "pools",
	describe: "Load Balancers operations",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($edit)
			.command($health)
			.command($preview)
			.command($references)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
