/**
 * monitor-groups command group
 * @generated from apis/overlays/load-balancers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $references from "./references/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "monitor-groups",
	describe:
		"Group monitors together for shared configuration and bulk management",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($edit)
			.command($get)
			.command($list)
			.command($update)
			.command($references)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
