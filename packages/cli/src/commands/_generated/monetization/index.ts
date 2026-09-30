/**
 * monetization command
 * @generated from apis/overlays/monetization.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $accounteligibility from "./account-eligibility/index.js";
import $rules from "./rules/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "monetization",
	describe: "monetization",

	builder: (yargs) => {
		return yargs
			.command($accounteligibility)
			.command($rules)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
