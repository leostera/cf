/**
 * dns command group
 * @generated from apis/overlays/email-sending.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $fix from "./fix.js";
import $get from "./get.js";
import $status from "./status.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "dns",
	describe: "Operations for subdomains.dns",

	builder: (yargs) => {
		return yargs
			.command($fix)
			.command($get)
			.command($status)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
