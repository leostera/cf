/**
 * mitigations command group
 * @generated from apis/overlays/abuse-reports.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $review from "./review.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "mitigations",
	describe: "Mitigation actions taken in response to abuse reports",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($review)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
