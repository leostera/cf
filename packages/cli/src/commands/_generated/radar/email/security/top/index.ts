/**
 * top command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $tlds from "./tlds/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "top",
	describe: "Operations for email.security.top",

	builder: (yargs) => {
		return yargs.command($tlds).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
