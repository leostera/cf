/**
 * audio-tracks command group
 * @generated from apis/overlays/stream.ts
 */
import type { CommandModule } from "yargs";
import type { CommonYargsOptions } from "#lib/cli-types.js";
import $copy from "./copy.js";
import $delete from "./delete.js";
import $edit from "./edit.js";
import $list from "./list.js";

const command: CommandModule<CommonYargsOptions> = {
	command: "audio-tracks",
	describe: "Operations for videos.audio-tracks",

	builder: (yargs) => {
		return yargs
			.command($copy)
			.command($delete)
			.command($edit)
			.command($list)
			.demandCommand(1, "Please specify a subcommand");
	},

	handler: () => {},
};

export default command;
