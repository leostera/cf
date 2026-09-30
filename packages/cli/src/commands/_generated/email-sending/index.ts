/**
 * email-sending command
 * @generated from apis/overlays/email-sending.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $send from "./send.js";
import $sendraw from "./send-raw.js";
import $limits from "./limits/index.js";
import $reputation from "./reputation/index.js";
import $subdomains from "./subdomains/index.js";
import $suppressions from "./suppressions/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "email-sending",
	describe:
		"Send transactional email and manage sending subdomains and their DNS configuration",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($send)
			.command($sendraw)
			.command($limits)
			.command($reputation)
			.command($subdomains)
			.command($suppressions)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
