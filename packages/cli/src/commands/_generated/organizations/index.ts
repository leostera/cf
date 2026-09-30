/**
 * organizations command
 * @generated from apis/overlays/organizations.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $billing from "./billing/index.js";
import $logs from "./logs/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "organizations",
	describe:
		"Multi-user organizations that group accounts, members, and shared settings under a single entity",

	builder: (yargs) => {
		return yargs
			.command($billing)
			.command($logs)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
