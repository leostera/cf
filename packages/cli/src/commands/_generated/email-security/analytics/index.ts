/**
 * analytics command group
 * @generated from apis/overlays/email-security.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $monthlyreport from "./monthly-report/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "analytics",
	describe:
		"Analytics and reporting — monthly report and per-day breakdowns of threat activity",

	builder: (yargs) => {
		return yargs
			.command($monthlyreport)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
