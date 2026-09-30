/**
 * feedback command group
 * @generated from apis/overlays/bot-management.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $create from "./create.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "feedback",
	describe: "Operations for feedback",

	builder: (yargs) => {
		return yargs
			.command($create)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
