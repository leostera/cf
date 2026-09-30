/**
 * dns command group
 * @generated from apis/overlays/email-routing.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $unlock from "./unlock.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "dns",
	describe: "Inspect or unlock the DNS records required by Email Routing",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($unlock)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
