/**
 * get command group
 * @generated from apis/overlays/accounts.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $categories from "./categories.js";
import $by from "./by/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "get",
	describe: "Operations for categories.get",

	builder: (yargs) => {
		return yargs
			.command($categories)
			.command($by)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
