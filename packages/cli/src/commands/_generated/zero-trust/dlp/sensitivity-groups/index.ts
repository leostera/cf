/**
 * sensitivity-groups command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $getlevelorder from "./get-level-order.js";
import $list from "./list.js";
import $update from "./update.js";
import $updatelevelorder from "./update-level-order.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "sensitivity-groups",
	describe:
		"Data Loss Prevention - manage sensitivity groups and their level ordering",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($getlevelorder)
			.command($list)
			.command($update)
			.command($updatelevelorder)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
