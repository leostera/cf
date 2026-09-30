/**
 * versions command group
 * @generated from apis/overlays/rulesets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $bytag from "./by-tag/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "versions",
	describe: "Operations for account-rulesets.versions",

	builder: (yargs) => {
		return yargs
			.command($delete)
			.command($get)
			.command($list)
			.command($bytag)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
