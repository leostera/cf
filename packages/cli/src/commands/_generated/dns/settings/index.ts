/**
 * settings command group
 * @generated from apis/overlays/dns.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $account from "./account/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "settings",
	describe: "Operations for settings",

	builder: (yargs) => {
		return yargs
			.command($account)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
