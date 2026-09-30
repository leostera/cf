/**
 * queries command group
 * @generated from apis/overlays/brand-protection.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $dismiss from "./dismiss.js";
import $get from "./get.js";
import $undismiss from "./undismiss.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "queries",
	describe: "Operations for queries",

	builder: (yargs) => {
		return yargs
			.command($dismiss)
			.command($get)
			.command($undismiss)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
