/**
 * address-maps command group
 * @generated from apis/overlays/addressing.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $get from "./get.js";
import $list from "./list.js";
import $accounts from "./accounts/index.js";
import $ips from "./ips/index.js";
import $zones from "./zones/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "address-maps",
	describe: "Operations for address-maps",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($edit)
			.command($get)
			.command($list)
			.command($accounts)
			.command($ips)
			.command($zones)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
