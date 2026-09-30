/**
 * audit command group
 * @generated from apis/overlays/accounts.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $history from "./history.js";
import $list from "./list.js";
import $productcategories from "./product-categories.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "audit",
	describe: "Operations for logs.audit",

	builder: (yargs) => {
		return yargs
			.command($history)
			.command($list)
			.command($productcategories)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
