/**
 * universal command group
 * @generated from apis/overlays/ssl.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $settings from "./settings/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "universal",
	describe: "Operations for universal",

	builder: (yargs) => {
		return yargs
			.command($settings)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
