/**
 * proposals command group
 * @generated from apis/overlays/pay-per-crawl.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $decide from "./decide.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "proposals",
	describe: "Operations for pay-per-use.proposals",

	builder: (yargs) => {
		return yargs
			.command($decide)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
