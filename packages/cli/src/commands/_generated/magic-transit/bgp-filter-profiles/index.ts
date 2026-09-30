/**
 * bgp-filter-profiles command group
 * @generated from apis/overlays/magic-transit.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "bgp-filter-profiles",
	describe:
		"BGP filter profiles for controlling which routes are allowed or denied on Magic Transit tunnels",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
