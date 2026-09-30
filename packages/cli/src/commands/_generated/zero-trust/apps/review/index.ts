/**
 * review command group
 * @generated from apis/overlays/zero-trust.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $status from "./status/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "review",
	describe: "Operations for apps.review",

	builder: (yargs) => {
		return yargs
			.command($status)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
