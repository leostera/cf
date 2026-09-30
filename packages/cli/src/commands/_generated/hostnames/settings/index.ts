/**
 * settings command group
 * @generated from apis/overlays/hostnames.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $tls from "./tls/index.js";
import $tlssingle from "./tls-single/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "settings",
	describe: "Operations for settings",

	builder: (yargs) => {
		return yargs
			.command($tls)
			.command($tlssingle)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
