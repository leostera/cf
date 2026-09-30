/**
 * vtt command group
 * @generated from apis/overlays/stream.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $get from "./get.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "vtt",
	describe: "Operations for videos.captions.language.vtt",

	builder: (yargs) => {
		return yargs.command($get).demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
