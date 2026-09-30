/**
 * account-rulesets command group
 * @generated from apis/overlays/rulesets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $get from "./get.js";
import $list from "./list.js";
import $update from "./update.js";
import $phases from "./phases/index.js";
import $rules from "./rules/index.js";
import $versions from "./versions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "account-rulesets",
	describe: "Operations for account-rulesets",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($get)
			.command($list)
			.command($update)
			.command($phases)
			.command($rules)
			.command($versions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
