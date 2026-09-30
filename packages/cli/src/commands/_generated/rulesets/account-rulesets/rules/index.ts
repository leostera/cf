/**
 * rules command group
 * @generated from apis/overlays/rulesets.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $delete from "./delete.js";
import $update from "./update.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "rules",
	describe: "Operations for account-rulesets.rules",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($delete)
			.command($update)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
