/**
 * email-auth command
 * @generated from apis/overlays/email-auth.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $dmarcreports from "./dmarc-reports/index.js";
import $spf from "./spf/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "email-auth",
	describe: "email-auth",

	builder: (yargs) => {
		return yargs
			.command($dmarcreports)
			.command($spf)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
