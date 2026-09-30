/**
 * pools command group
 * @generated from apis/overlays/load-balancers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $bulkedit from "./bulk-edit.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $health from "./health/index.js";
import $references from "./references/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "pools",
	describe:
		"Origin server pools with weighted traffic distribution, health thresholds, and geographic preferences",

	builder: (yargs) => {
		return yargs
			.command($bulkedit)
			.command($create)
			.command($delete)
			.command($edit)
			.command($get)
			.command($list)
			.command($update)
			.command($health)
			.command($references)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
