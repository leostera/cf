/**
 * logo-matches command
 * @generated from apis/overlays/logo-matches.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";
import $download from "./download/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "logo-matches",
	describe: "logo-matches",

	builder: (yargs) => {
		return yargs
			.command($get)
			.command($download)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
