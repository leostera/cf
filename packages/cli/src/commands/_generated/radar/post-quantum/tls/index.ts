/**
 * tls command group
 * @generated from apis/overlays/radar.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $support from "./support.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "tls",
	describe: "Operations for post-quantum.tls",

	builder: (yargs) => {
		return yargs
			.command($support)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
