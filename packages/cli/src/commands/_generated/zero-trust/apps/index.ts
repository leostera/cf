/**
 * apps command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $review from "./review/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "apps",
	describe: "Operations for apps",

	builder: (yargs) => {
		return yargs
			.command($review)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
