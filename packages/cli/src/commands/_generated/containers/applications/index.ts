/**
 * applications command group
 * @generated from apis/overlays/containers.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $list from "./list.js";
import $instances from "./instances/index.js";
import $rollouts from "./rollouts/index.js";
import $versions from "./versions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "applications",
	describe: "Manage Containers applications",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($edit)
			.command($get)
			.command($list)
			.command($instances)
			.command($rollouts)
			.command($versions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
