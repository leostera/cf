/**
 * reputation command group
 * @generated from apis/overlays/email-sending.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $getcomplaints from "./get-complaints.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "reputation",
	describe: "Operations for subdomains.reputation",

	builder: (yargs) => {
		return yargs
			.command($getcomplaints)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
