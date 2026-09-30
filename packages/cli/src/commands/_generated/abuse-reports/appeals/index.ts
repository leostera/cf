/**
 * appeals command group
 * @generated from apis/overlays/abuse-reports.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $eligibility from "./eligibility.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "appeals",
	describe: "Appeal eligibility for abuse reports",

	builder: (yargs) => {
		return yargs
			.command($eligibility)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
