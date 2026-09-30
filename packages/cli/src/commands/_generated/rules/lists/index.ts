/**
 * lists command group
 * @generated from apis/overlays/rules.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $bulkoperations from "./bulk-operations/index.js";
import $items from "./items/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "lists",
	describe:
		"Custom account-level lists of IPs, hostnames, ASNs, or redirects used in rule expressions",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($bulkoperations)
			.command($items)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
