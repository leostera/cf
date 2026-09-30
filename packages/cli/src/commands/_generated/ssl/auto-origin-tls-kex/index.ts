/**
 * auto-origin-tls-kex command group
 * @generated from apis/overlays/ssl.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $edit from "./edit.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "auto-origin-tls-kex",
	describe: "Operations for auto-origin-tls-kex",

	builder: (yargs) => {
		return yargs
			.command($edit)
			.command($get)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
