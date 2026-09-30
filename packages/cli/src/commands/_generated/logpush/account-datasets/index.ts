/**
 * account-datasets command group
 * @generated from apis/overlays/logpush.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $fields from "./fields/index.js";
import $jobs from "./jobs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "account-datasets",
	describe: "Operations for account-datasets",

	builder: (yargs) => {
		return yargs
			.command($fields)
			.command($jobs)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
