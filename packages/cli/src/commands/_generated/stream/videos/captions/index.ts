/**
 * captions command group
 * @generated from apis/overlays/stream.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $list from "./list.js";
import $language from "./language/index.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "captions",
	describe: "Operations for videos.captions",

	builder: (yargs) => {
		return yargs
			.command($list)
			.command($language)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
